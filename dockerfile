FROM node:19-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.23.2-alpine
COPY --from=build /usr/src/app/dist/glycemiefontend /usr/share/nginx/html
EXPOSE 80
