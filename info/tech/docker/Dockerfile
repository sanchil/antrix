# https://gist.github.com/hermanbanken/96f0ff298c162a522ddbba44cad31081

FROM nginx:alpine AS builder

# nginx:alpine contains NGINX_VERSION environment variable, like so:
# ENV NGINX_VERSION 1.15.0

#RUN echo 'Nginx version: ' $NGINX_VERSION
#ENV NGINX_VERSION 1.17.9


# For latest build deps, see https://github.com/nginxinc/docker-nginx/blob/master/mainline/alpine/Dockerfile
RUN apk add --no-cache --virtual .build-deps \
  gcc \
  libc-dev \
  make \
  openssl-dev \
  pcre-dev \
  zlib-dev \
  linux-headers \
  curl \
  gnupg \
  libxslt-dev \
  gd-dev \
  geoip-dev \
  git

# Download sources
# wget https://nginx.org/download/nginx-1.17.9.tar.gz

RUN wget "http://nginx.org/download/nginx-${NGINX_VERSION}.tar.gz"  && \
    tar -zxC /opt -f "nginx-${NGINX_VERSION}.tar.gz"  && \
    git clone https://github.com/vision5/ngx_devel_kit.git  && \
    git clone https://github.com/openresty/set-misc-nginx-module.git  && \
    git clone https://github.com/openresty/redis2-nginx-module.git 



# Reuse same cli arguments as the nginx:alpine image used to build
#RUN CONFARGS=$(nginx -V 2>&1 | sed -n -e 's/^.*arguments: //p') \


RUN	mv  ngx_devel_kit /opt  && \
    	mv  set-misc-nginx-module /opt  && \
    	mv  redis2-nginx-module /opt && \ 
    	cd /opt/nginx-$NGINX_VERSION && \
    	echo -e '#!/bin/ash \n\n ./configure' \
		$(nginx -V 2>&1 | sed -n -e 's/^.*arguments: //p') \
		'--add-dynamic-module=/opt/ngx_devel_kit \
		--add-dynamic-module=/opt/set-misc-nginx-module \
		--add-dynamic-module=/opt/redis2-nginx-module  && \
		make && make install' \
		> installconf && \
		chmod 755 installconf && \
    		./installconf
    	
  	
 # 	./configure $CONFARGS --add-dynamic-module=/opt/ngx_devel_kit --add-dynamic-module=/opt/set-misc-nginx-module --add-dynamic-module=/#opt/redis2-nginx-module  && make && make install

FROM nginx:alpine
# Extract the dynamic module NCHAN from the builder image
COPY --from=builder /usr/lib/nginx/modules/* /usr/lib/nginx/modules/

#RUN rm /etc/nginx/conf.d/default.conf


#COPY nginx.conf /etc/nginx/nginx.conf
#COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
STOPSIGNAL SIGTERM
CMD ["nginx", "-g", "daemon off;"]
