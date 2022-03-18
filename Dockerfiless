

FROM node:latest as build
WORKDIR /usr/frontend/path
COPY ./ /usr/frontend/path/
RUN npm install
RUN npm run build


FROM nginx:latest
COPY --from=build /usr/frontend/path/dist/Project2 /usr/share/nginx/html
EXPOSE 80
