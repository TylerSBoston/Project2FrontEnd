FROM nginx:latest
COPY ./dist/ /var/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000 80

