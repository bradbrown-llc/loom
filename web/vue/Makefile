.PHONY: build run rm deploy

build:
	docker build -t vue:latest .

run:
	docker run --rm -d -p 3000:3000/tcp -e FTPUSER_PASS='$(ftpuser_pass)' -e APACHE_IP='$(apache_ip)' vue:latest

rm:
	docker rm -f $$(docker ps -qf "ancestor=vue")

.ONESHELL:
deploy:
	vue_id=$$(docker ps -qf 'ancestor=vue')
	docker exec -ti $$vue_id sh /app/deploy