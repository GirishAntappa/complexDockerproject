#Specify a base image
FROM node:14-alpine

# to save the project files in directories of docker directories
WORKDIR  /usr/app
#Install some dependencies
COPY ./package.json ./
RUN npm install 

COPY ./ ./
#Default command
CMD ["npm","start"]