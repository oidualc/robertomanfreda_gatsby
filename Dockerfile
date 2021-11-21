FROM node:17
WORKDIR /opt/app/
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 9000
CMD ["npm", "run", "serve", "--", "-H", "0.0.0.0"]
