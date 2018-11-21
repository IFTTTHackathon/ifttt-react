FROM httpd:2.4

#ENV APACHE_DOCUMENT_ROOT=/usr/local/apache2/htdocs/build

#RUN sed -ri -e 's!/usr/local/apache2/htdocs!${APACHE_DOCUMENT_ROOT}!g' /usr/local/apache2/conf/httpd.conf

COPY ./build/ /usr/local/apache2/htdocs/