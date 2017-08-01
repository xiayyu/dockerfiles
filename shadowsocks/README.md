# Docker for shadowsocks

Refer to [shadowsocks/shadowsocks-libev](https://github.com/shadowsocks/shadowsocks-libev/tree/master/docker/alpine)

## Build docker images

```
$ curl -sSL https://github.com/shadowsocks/shadowsocks-libev/raw/master/docker/alpine/Dockerfile | docker build -t shadowsocks-libev -
```

## Run docker container with docker-compose

```
docker-compose up -d

```