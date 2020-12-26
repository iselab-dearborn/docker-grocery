#!/bin/sh

cd api
docker build -t iselabdearborn/docker-grocery-api .
docker push iselabdearborn/docker-grocery-api
cd ..

cd creator
docker build -t iselabdearborn/docker-grocery-creator .
docker push iselabdearborn/docker-grocery-creator
cd ..

cd web
docker build -t iselabdearborn/docker-grocery-web .
docker push iselabdearborn/docker-grocery-web
cd ..
