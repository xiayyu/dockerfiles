# DEPRECATE! 

USE [docker-compose-letsencrypt-nginx-proxy-companion](https://github.com/evertramos/docker-compose-letsencrypt-nginx-proxy-companion)!

# Letsnginx

A fork of [docker-compose-letsencrypt-nginx-proxy-companion](https://github.com/evertramos/docker-compose-letsencrypt-nginx-proxy-companion), slightly modified for my taste.

## Usage

Set up environment var `NGINX_FILES_PATH` to some path by

```bash
cp .env.example .env
```

And edit the `.env` file

```text
NGINX_FILES_PATH=/some/path
```

Then copy the `nginx.tmpl` file to `${NGINX_FILES_PATH}`.

```bash
cp nginx.tmpl /some/path
```

Create docker network with name `nginx-proxy`

```bash
docker network create nginx-proxy
```

Run docker containers

```bash
docker-compose up -d
```

Check if containers are running

```bash
docker ps
```

There should be three running containers named `nginx-proxy`, `nginx-gen` and `nginx-letsencrypt`

For additional usage, check [blog](https://github.com/xiayyu/dockerfiles/tree/master/blog)