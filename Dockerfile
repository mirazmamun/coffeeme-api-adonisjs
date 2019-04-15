FROM node:11.13.0

WORKDIR /var/app
RUN npm i -g npm
RUN npm i
RUN npm i -g @adonisjs/cli
RUN adonis -V 
RUN adonis -h
# RUN adonis migration:run
CMD npm start