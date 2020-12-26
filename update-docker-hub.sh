#!/bin/sh

docker build -t iselabdearborn/docker-grocery-api ./api
docker push iselabdearborn/docker-grocery-api

docker build -t iselabdearborn/docker-grocery-creator ./creator
docker push iselabdearborn/docker-grocery-creator

docker build -t iselabdearborn/docker-grocery-web ./web
docker push iselabdearborn/docker-grocery-web
