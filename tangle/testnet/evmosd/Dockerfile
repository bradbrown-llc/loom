FROM alpine:latest as evmosd
RUN apk add --no-cache gcompat && \
    wget -O- https://github.com/tharsis/evmos/releases/download/v4.0.1/evmos_4.0.1_Linux_x86_64.tar.gz \
        | tar xvz bin/evmosd

FROM evmosd
COPY . /
WORKDIR /app
#CMD ["sleep", "infinity"]
CMD ["sh", "init"]
EXPOSE 8545