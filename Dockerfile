FROM golang:1.11.2
COPY ./ /app
WORKDIR /app
RUN make build

FROM node:11.1
COPY --from=0 /app/src/client /app/src
WORKDIR /app/src/
RUN npm install
RUN npm run build

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /app/
COPY --from=0 /app/bin/service-entrypoint /app/service-entrypoint
COPY --from=1 /app/src/build /app/static
CMD ["/app/service-entrypoint"]
