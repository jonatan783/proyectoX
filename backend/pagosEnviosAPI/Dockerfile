#INSTUCCIONES - argumentos

FROM node:16

WORKDIR /src

COPY ./package.json package.json
COPY . .

RUN ["npm", "install"]

CMD ["npm", "run", "dev"]

EXPOSE 3006