.PHONY: build run debug1 debug2
export n = $$(pwd | grep -oP 'lib.\K.+')
export p = $$(cat Dockerfile | grep -oP 'EXPOSE.\K.+' | sed -E 's/[[:digit:]]+/&:&\/tcp/g')

run:
	sed -Ei 's/# //' Dockerfile
	$(MAKE) build
	docker run --net net0 --rm -dp $p $n

debug1:
	sed -Ei 's/# //' Dockerfile
	$(MAKE) build
	docker run --net net0 --rm -itp $p $n

debug2:
	sed -Ei 's/^CMD/# &/' Dockerfile
	$(MAKE) build
	docker run --net net0 --rm -itp $p $n

build:
	docker build -t $n .