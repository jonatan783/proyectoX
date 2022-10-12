#INSTUCCIONES - argumentos

FROM node:16

WORKDIR /src

COPY ./package.json package.json
COPY ./package-lock.json package-lock.json
COPY ./server.js server.js

RUN ["npm", "install"]

CMD ["npm", "start"]

EXPOSE 3001