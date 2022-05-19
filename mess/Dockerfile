FROM alpine:latest
WORKDIR /app
RUN apk add nodejs npm curl
RUN npm i @google-cloud/compute @kubernetes/client-node
COPY app.mjs .