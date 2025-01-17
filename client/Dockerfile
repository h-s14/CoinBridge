# Build stage
FROM node:alpine3.19 as build

# Build-time environment variable


# Set working directory and install dependencies
WORKDIR /client
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=0 /client/dist /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
