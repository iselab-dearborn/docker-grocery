# Lets us specify which base image from Docker Hub
# we want to build from.
FROM node:alpine

RUN mkdir -p /usr/app

WORKDIR /usr/app

RUN npm install -g nodemon

COPY package*.json ./

# Lets us execute the npm install command which will download all
# the dependencies defined in package.json.
RUN npm install

RUN mv /usr/app/node_modules /node_modules

# lLets us copy our entire local directory into our working directory
# to bundle our application source code.
COPY . .

# Exposes a port which the container will listen on.
EXPOSE 3001

CMD ["npm", "start"]
