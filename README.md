> ⛔️ **DEPRECATED** -
The group behind the creation of this disbanded, and blockscout proved to be a bulky, bloated mess.

# Loom

A tool to create and deploy configurable, EVM-compatible blockchains.
- Uses blockscout to deploy a blockchain scanner along with the chain.
- Uses evmos as the execution application of the chain.
- Uses docker to containerize the scanner and execution app.

Loom is to be provided as a service, so any group wishing to have their own blockchain could acquire one with one click.
Optionally, groups would be able to specify contracts to be pre-deployed with the chain.
For example, the chain may start with a customizable Uniswap clone and interface.

Using containers, chains, scanners, and interfaces can be deployed and managed easily on baremetal or cloud architectures.