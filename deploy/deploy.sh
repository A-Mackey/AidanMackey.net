#!/bin/bash
ENV=$1

ssh -i ~/.ssh/deploy_key -o StrictHostKeyChecking=no $SERVER_USER@$SERVER_HOST <<EOF
  cd ~/workspace/AidanMackey.net/Aidanmackey.net
  docker buildx build -t aidan-mackey-net .

  cd ~/workspace/AidanMackey.net/deploy
  docker compose -f docker-compose.$ENV.yml pull ray-casting
  docker compose -f docker-compose.$ENV.yml pull prometheus

  docker compose -f docker-compose.$ENV.yml up -d
EOF
