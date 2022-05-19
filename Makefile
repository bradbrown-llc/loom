build:
	docker build -t $$dir $$dir

run:
	docker run --rm -it $$dir

push:
	docker tag $$dir us-east1-docker.pkg.dev/bradbrownllc-tngl/docker/$$dir
	docker push us-east1-docker.pkg.dev/bradbrownllc-tngl/docker/$$dir

deploy:
	kubectl apply -f $$dir

copy:
	kubectl cp $$dir/$$fp $$(kubectl get pods --selector='app=mess' -o name | grep -Eo '(\w|-)+$$'):/app
	