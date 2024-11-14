# Ludo Project - Web App

App for handling order in a bar

## Run the application

To run the application it is necessary docker and docker-compose installed on your machine. Moreover you need Grunt installed globally

First of all, clone this repository. After that run the following command in the root folder:

```
npm build
```

```
npm start
```

After that you can access the application at:

http://localhost

## Docker structure

There are 4 services defined in docker compose:

1. client: node20 image that hosts the client of the application based on VUE.js
2. server: node:20-alpine image that hosts the API 
3. server-database: MySql image
4. proxy: nginx image that works as proxy between client and server