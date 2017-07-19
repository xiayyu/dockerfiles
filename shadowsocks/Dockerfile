FROM alpine:3.6

MAINTAINER xiayyu <xiayyu.me@gmail.com>

ENV SS_LIBEV_VERSION 3.0.7

RUN apk upgrade --no-cache \
    && apk add --no-cache --virtual .build-deps \
        curl \
        tar \
        autoconf \
        build-base \
        libtool \
        linux-headers \
        libev-dev \
        libsodium-dev \
        mbedtls-dev \
        pcre-dev \
        udns-dev \
    && curl -sSLO https://github.com/shadowsocks/shadowsocks-libev/releases/download/v$SS_LIBEV_VERSION/shadowsocks-libev-$SS_LIBEV_VERSION.tar.gz \
    && tar -zxf shadowsocks-libev-$SS_LIBEV_VERSION.tar.gz \
    && cd shadowsocks-libev-$SS_LIBEV_VERSION \
    && ./configure --prefix=/usr --disable-documentation \
    && make install && cd ../ \
    && apk add --no-cache --virtual .run-deps \
        libev \
        libsodium \
        mbedtls \
        pcre \
        udns \
    && apk del .build-deps \
    && rm -rf shadowsocks-libev-$SS_LIBEV_VERSION.tar.gz \
        shadowsocks-libev-$SS_LIBEV_VERSION \
        /var/cache/apk/*

ENTRYPOINT ["/usr/bin/ss-server"]
