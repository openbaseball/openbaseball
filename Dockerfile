FROM golang:1.11
COPY ./ /app
WORKDIR /app
RUN make build

FROM node:11.1
COPY --from=0 /app/src/client /app/src
WORKDIR /app/src/
RUN npm install
RUN npm run build

FROM nginx:latest
RUN apt-get update && \
    apt-get install -y supervisor && \
    apt-get clean
WORKDIR /app/
COPY --from=0 /app/bin/service-entrypoint /app/service-entrypoint
COPY --from=1 /app/src/build /app/static
COPY ./supervisord.conf /etc/supervisord.conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Looks like a crap but now it's all what I need
# TODO: divide into 2 containers
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
