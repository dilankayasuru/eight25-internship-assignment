FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY ./e25assignment.conf /etc/nginx/conf.d/

EXPOSE 80