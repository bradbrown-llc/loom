.PHONY: create debug build

name = $$(pwd | grep -Po 'loom.\K.+')
proj = bradbrownllc-tngl
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
	docker run --net net0 --rm -it $(name)

build:
	docker build -t $(name) .