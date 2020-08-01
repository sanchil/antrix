FROM node:current-slim

RUN sudo apt update && \ 
	sudo apt install -y curl &&\
        curl -o- -L https://yarnpkg.com/install.sh | bash


WORKDIR ~/spaces/razzle/antrixtek

COPY package.json .

RUN npm install

COPY . .

RUN yarn build

CMD ["yarn", "start:prod"]
