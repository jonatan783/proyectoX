#INSTUCCIONES - argumentos

FROM node:16

WORKDIR /app

COPY ./package.json package.json
COPY ./src/index.ts index.ts

RUN ["npm", "install"]

CMD ["npm", "run", "dev"]

EXPOSE 3105