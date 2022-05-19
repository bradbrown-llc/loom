import k8s from '@kubernetes/client-node';
import { InstancesClient } from '@google-cloud/compute';
import { readFileSync } from 'fs';

let project = process.env.PROJECT;
let zone = process.env.ZONE;
let kc = new k8s.KubeConfig();
kc.loadFromDefault();
let k8sApi = kc.makeApiClient(k8s.CoreV1Api);
let gc = new InstancesClient();
let ips = getIps();

async function main() {
    let instances = await getAllInstances();
    instances.forEach((instance, i) => fixInstanceIp(instance, ips[i]));
    k8sApi.patchNamespacedService(
        "nginx-service", 
        "default",
        { spec: { externalIPs: ips}},
        undefined,
        undefined,
        undefined,
        undefined,
        { headers: { 'content-type': 'application/merge-patch+json' }}
    )
};

function getIps() {
    return readFileSync('/etc/cnf/ips', { encoding: 'utf8' })
       .split(',')
       .filter(ip => ip);
} 

async function getAllInstances() {
    let [ instances ] = await gc.list({ project: project, zone: zone });
    return instances.sort((a, b) => a.creationTimestamp < b.creationTimestamp || -1);
}

function getInstanceIp(instance) {
    return instance
        .networkInterfaces[0]
        .accessConfigs[0]
        .natIP;
}

function fixInstanceIp(instance, ip) {
    if (ip && getInstanceIp(instance) == ip) return;
    if (!ip && ips.indexOf(getInstanceIp(instance)) == -1) return;
    await gc.deleteAccessConfig({
        project: project,
        zone: zone,
        instance: instance.name,
        networkInterface: 'nic0',
        accessConfig: 'external-nat'
    });
    console.log(`updating node ${instance.name}`)
    await gc.addAccessConfig({
        project: project,
        zone: zone,
        instance: instance.name,
        networkInterface: 'nic0',
        accessConfigResource: { natIP: ip }
    });
    await k8sApi.patchNode(
        instance.name, 
        { metadata: { labels: { 'messed-up': (!!ip).toString() }}},
        undefined,
        undefined,
        undefined,
        undefined,
        { headers: { 'content-type': 'application/merge-patch+json' }}
    )
}

main();