# DEPRECATE! 

USE [docker-nextcloud-letsencrypt](https://github.com/evertramos/docker-nextcloud-letsencrypt)!

# nextcloud

Use postgres, needs companion with `letsnginx`

## database config

The db is host on docker internal network without exposed. Run

```bash
docker inspect nextcloud_db
```

to get the ip which will be used when nextcloud init.