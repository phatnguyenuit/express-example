FROM node:slim
RUN mkdir -p /usr/src/express-example
WORKDIR /usr/src/express-example
COPY ./app .
RUN yarn
EXPOSE 4000
CMD yarn dev | yarn start
# dockerize nodejs app best practice