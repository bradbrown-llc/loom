.PHONY: build run rm

build:
	docker build -t apache:latest .

run:
	docker run --rm -d -p 80:80/tcp -e FTPUSER_PASS='$(ftpuser_pass)' apache:latest

rm:
	docker rm -f $$(docker ps -qf "ancestor=apache")