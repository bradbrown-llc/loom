FROM alpine:latest
RUN apk add nginx 
COPY ./nginx.conf /etc/nginx/
CMD ["nginx"]
EXPOSE 80