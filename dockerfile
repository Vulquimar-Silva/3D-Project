
# define a imagem base para construir a partir
FROM node:alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app
RUN npm cache clean --force
RUN npm install --legacy-peer-deps
COPY . /usr/src/app
EXPOSE 5173
CMD ["npm","start"]