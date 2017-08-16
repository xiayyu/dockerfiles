# Blog

A simple static web server behind [letsnginx](https://github.com/xiayyu/dockerfiles/tree/master/letsnginx). Also containing a sftp container for the companion with [hexo](https://github.com/hexojs/hexo)

## Usage

First, make sure the three containers of [letsnginx](https://github.com/xiayyu/dockerfiles/tree/master/letsnginx) are running.  
Then, set up the environment vars by edit the `.env` file.
* `WEB_DOMAIN_NAME` is the domain of you server
* `LETSENCRYPT_EMAIL` is the email for letsencrypt
* `SFTP_PW` for sftp passwd

For my example, I set three hosts `${WEB_DOMAIN_NAME}`, `www.${WEB_DOMAIN_NAME}` and `blog.${WEB_DOMAIN_NAME}` to the blog server, you may want to change them.

Run these docker containers
```
$ docker-compose up -d
```
Upload you static files via sftp with `port: 2222`, `name: blog` and the `passwd` you have set.  

For hexo, set `_config.yml`
```yml
deploy:
  type: sftp
  host: [hostname]
  user: blog
  pass: [passwd]
  port: 2222
  remotePath: /upload
```