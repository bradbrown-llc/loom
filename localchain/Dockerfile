FROM alpine:latest
RUN apk add gcompat
RUN wget -O- https://github.com/tharsis/evmos/releases/download/v4.0.1/evmos_4.0.1_Linux_x86_64.tar.gz | tar xvz bin/evmosd
COPY init .
CMD . ./init
EXPOSE 8545