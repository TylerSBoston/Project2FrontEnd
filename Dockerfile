

FROM node:latest as build
RUN npm install
RUN npm run build
RUN npm run start
RUN ng serve
EXPOSE 4200

# FROM nginx:latest
#COPY --from=build dist/Project2 nginx/html
#EXPOSE 80
#RUN npm run start
#RUN ng serve
