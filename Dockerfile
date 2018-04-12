FROM node:8-alpine as builder
RUN apk --no-cache --update add gzip
RUN mkdir -p /opt/frontend
ADD ./package.json /opt/frontend
ADD ./package-lock.json /opt/frontend
WORKDIR /opt/frontend
RUN npm install
ADD . /opt/frontend
RUN npm run build
WORKDIR /opt/frontend/dist
RUN chown -R root:root *
RUN find . -type f -exec gzip -k \{\} \;
RUN find . -type f -exec chmod 644 {} \;
RUN find . -type d -exec chmod 755 {} \;


FROM nginx:1-alpine
WORKDIR /
COPY --from=builder /opt/frontend/dist/ /usr/share/nginx/html/
WORKDIR /
ADD ./nginx/go.sh /go.sh
ADD ./nginx/nginx.hosts.conf /nginx.hosts.conf

EXPOSE 8080

CMD ["/go.sh"]
