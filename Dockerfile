FROM node:lts as builder
WORKDIR /src
COPY . .
RUN yarn
RUN yarn build

FROM wisvch/nginx
COPY --from=builder /src/build/ /srv/2022
