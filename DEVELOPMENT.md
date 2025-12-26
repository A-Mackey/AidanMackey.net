## Development

### Nginx

Setting up a reverse proxy on a webserver to host all stages

First a shared network needs to be created: `docker network create webnet`

In the docker compose files, put all docker containers on the same network:

```
services:
  website-beta:
    image: aidan-mackey-net-beta
    container_name: aidan-mackey-net-beta
    restart: always
    ports:
      - "${PORT}:3000"
    environment:
      - NODE_ENV=${STAGE}
    volumes:
      - ./logs/website_${STAGE}:/app/logs
    networks:
      - website

networks:
  website:
    external: true
```

Example:

```
# aidanmackey.net -> localhost:3000
server {
    listen 80;
    server_name aidanmackey.net www.aidanmackey.net;

    location / {
        proxy_pass http://host.docker.internal:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```