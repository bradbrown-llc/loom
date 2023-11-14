.PHONY: create debug build

name = $$(pwd | grep -Po 'loom.\K.+')
port = $$(cat Dockerfile | grep -oP 'EXPOSE.\K.+' | sed -E 's/[[:digit:]]+/&:&\/tcp/g')
proj = foo
zone = us-east1
gtag = $(zone)-docker.pkg.dev/$(proj)/docker/$(name)
secr = $(name)/secrets.yml
scfp = ~/.secrets/$(secr)

create:
	$(MAKE) build
	docker tag $(name) $(gtag)
	docker push $(gtag)
	[ -f $(secr) ] && rm $(secr)   || :
	[ -f $(scfp) ] && cp $(scfp) . || :
	kubectl apply -f .
	[ -f $(secr) ] && rm $(secr)   || :

debug:
	$(MAKE) build
	docker run --rm -itp $(port) $(name)

build:
	docker build -t $(name) .