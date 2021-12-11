FROM node:17-alpine as pnpm-builder
RUN npm install --global pnpm

FROM pnpm-builder as builder
WORKDIR /opt/app/
ENV NODE_ENV production
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY . ./
RUN pnpm run build

FROM nginx:1.21-alpine
COPY --from=builder /opt/app/public/ /usr/share/nginx/html/
