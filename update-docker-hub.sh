#!/bin/sh

cd api

docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t iselabdearborn/docker-grocery-api --push .
#docker push iselabdearborn/docker-grocery-api
cd ..

cd creator
docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t iselabdearborn/docker-grocery-creator --push .
#docker push iselabdearborn/docker-grocery-creator
cd ..

cd web
docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t iselabdearborn/docker-grocery-web --push .
#docker push iselabdearborn/docker-grocery-web
cd ..
