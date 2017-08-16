# letsnginx

A fork of https://github.com/evertramos/docker-compose-letsencrypt-nginx-proxy-companion, slightly modified for my taste.

## Usage

Set up environment var `NGINX_FILES_PATH` to some path by
```
$ cp .env.example .env
$ vim .env
```
The `.env` file should look like
```
NGINX_FILES_PATH=/some/path
```
Then copy the `nginx.tmpl` file to `${NGINX_FILES_PATH}`.
```
$ cp nginx.tmpl /some/path
```
Create docker network with name `nginx-proxy`
```
$ docker network create nginx-proxy
```
Run docker containers
```
$ docker-compose up -d
```
Check if containers are running
```
$ docker ps
```
There should be three running containers named `nginx-proxy`, `nginx-gen` and `nginx-letsencrypt`
For additional usage, check [blog](https://github.com/xiayyu/dockerfiles/tree/master/blog)