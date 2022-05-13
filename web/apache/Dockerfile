FROM alpine:latest
WORKDIR /app
RUN apk add apache2 apache2-ctl vsftpd
COPY . .
CMD ["sh", "init"]
EXPOSE 80