FROM node:slim
RUN mkdir -p /usr/src/express-example
WORKDIR /usr/src/express-example
COPY package.json .
RUN yarn
COPY . .
EXPOSE 4000
CMD npm start
# dockerize nodejs app best practice