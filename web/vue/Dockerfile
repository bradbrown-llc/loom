FROM alpine:latest
WORKDIR /app
RUN apk add nodejs npm lftp
RUN \
    npm init -y vite app -- --template vue && \
    cp -rf app/* . && \
    rm -rf app public src
RUN npm install --prefix /app
COPY . .
CMD ["sh", "init"]
EXPOSE 3000