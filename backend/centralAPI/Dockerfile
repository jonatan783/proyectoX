#INSTUCCIONES - argumentos

FROM node:16

WORKDIR /src

COPY ./package.json package.json
COPY ./.sequelizerc .sequelizerc
COPY ./api/server.js server.js

RUN ["npm", "install"]

CMD ["npm", "run", "dev"]

EXPOSE 3001