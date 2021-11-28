FROM node:17-alpine as builder
WORKDIR /opt/app/
ENV NODE_ENV production
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.21-alpine
COPY --from=builder /opt/app/public/ /usr/share/nginx/html/
