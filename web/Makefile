.PHONY: build run rm deploy

build:
	$(MAKE) -C apache build
	$(MAKE) -C vue build

.ONESHELL:
run:
	export ftpuser_pass=$$(hexdump -e '1/ "%02x"' -n 32 /dev/random)
	$(MAKE) -C apache run
	apache_id=$$(docker ps -qf 'ancestor=apache')
	export apache_ip=$$(docker inspect -f '{{.NetworkSettings.IPAddress}}' $$apache_id)
	echo $$apache_ip
	$(MAKE) -C vue run

rm:
	$(MAKE) -C apache rm
	$(MAKE) -C vue rm

deploy:
	$(MAKE) -C vue deploy