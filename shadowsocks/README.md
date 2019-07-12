# DEPRECATE! 

USE v2ray!

# Docker for shadowsocks

Refer to [shadowsocks/shadowsocks-libev](https://github.com/shadowsocks/shadowsocks-libev/tree/master/docker/alpine)

## Build docker images

```bash
curl -sSL https://github.com/shadowsocks/shadowsocks-libev/raw/master/docker/alpine/Dockerfile | docker build -t shadowsocks-libev -
```

## Run docker container with docker-compose

Set up environment var by

```bash
cp .env.example .env
```

Edit the `.env` file

* `SS_METHOD` encrypt method for shadowsocks-libev, check [here](https://github.com/shadowsocks/shadowsocks-libev#usage)
* `SS_PW` passwd

```bash
docker-compose up -d
```
