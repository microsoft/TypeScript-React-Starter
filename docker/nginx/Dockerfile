FROM library/nginx:1.13

COPY ./app/build /var/www/html
COPY ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

RUN groupmod -g 1000 www-data \
  && usermod -u 1000 www-data

RUN chown -R www-data:www-data /var/www/html
