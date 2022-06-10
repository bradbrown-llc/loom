FROM alpine:latest AS blockscout
WORKDIR /app
RUN apk add --no-cache git elixir make g++ cargo postgresql14 postgresql14-contrib npm && \
    git clone https://github.com/poanetwork/blockscout
COPY . .
RUN . ./config && \
    . ./build

FROM blockscout
WORKDIR /app
#CMD ["sleep", "infinity"]
CMD . ./init
EXPOSE 4000 4001