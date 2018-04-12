#!/bin/sh
envsubst '$POLICYFLY_APP_BACKEND' < /nginx.hosts.conf > /etc/nginx/conf.d/default.conf
/usr/sbin/nginx -g "daemon off;"
