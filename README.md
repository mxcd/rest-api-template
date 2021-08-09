# REST API template

## Installation
Install node packages
```
npm i
```

Create your own `.env` file by copying the `.env_template`
```
cp .env_template .env 
```
For prototyping, a sqlite db is already in place. For heavier production loads, postgres is recommended.  

## Usage
Adapt the `./prisma/schema.prisma` file to represent your data.  
Then run `npx prisma generate` to create your own prisma DB client.  
To update the DB, run `npx prisma migrate dev`  
Then you can add your endpoints in the `./src/index.ts` file.  
Feel free to create dedicated controllers under `./src/controller/<BusinessObjectName.ts>` if it gets out of hand putting them all in the `index.ts` file  

## Running
To run the dedicated prisma DB viewer, execute `npx prisma studio`. This wil launch a web editor to inspect and modify your database.  
To run the application for development, run `npm run ts-node-dev`. This will start the typescript dev server.

## Production
To compile the code for production, run `npm run build`. Then package everything you need from the `./dist` dir in your run environment (e.g. Docker)
  
  
  
Made with &#9829;, pizza and beer by MaPa 
