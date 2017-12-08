FROM library/node:9.0

COPY ./app /home/nodejs

COPY ./docker/node/entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]