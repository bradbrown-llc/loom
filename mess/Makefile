name = $$(pwd | grep -Po 'loom.\K\w+')
proj = bradbrownllc-tngl
zone = us-east1
gtag = $(zone)-docker.pkg.dev/$(project)/docker
sec = ~/.secrets/$(name)-secrets.yml .


create:
#	echo $(sec)
#	docker build -t $(name) .
#	docker tag $(name) us-east1-docker.pkg.dev/bradbrownllc-tngl/docker/$(name)
#	docker push us-east1-docker.pkg.dev/bradbrownllc-tngl/docker/$(name)
	ifneq ("$(wildcard $(sec))", "")
		echo file exists
	else
		echo file does not exist
	endif
#	kubectl apply .
#	rm mess-secrets.yml