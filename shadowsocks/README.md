# Docker for shadowsocks

Building docker image for [shadowsocks-libev](https://github.com/shadowsocks/shadowsocks-libev) based on apline

## Usage

### Without docker-compose

```
docker build -t [your-custom-image-name] .
docker run -dt --name [your-custom-container-name] -p 8388:8388 ss -s :: -s 0.0.0.0 -p 8388 -m rc4-md5 -k [passwd] 
```
The details options for ss-server come after `docker run -dt --name [your-custom-container-name]`, detail usage are reffered to [shadowsocks-libev](https://github.com/shadowsocks/shadowsocks-libev).

### With docker-compose

