#INSTUCCIONES - argumentos

FROM node:16

WORKDIR /src

COPY ./api/package.json package.json
COPY ./api/package-lock.json package-lock.json
COPY ./api/server.js server.js

RUN ["npm", "install"]

CMD ["npm", "run", "dev"]

EXPOSE 3001