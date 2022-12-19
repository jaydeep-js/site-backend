import express  from 'express';
import typeDefs from './types/index';
import resolvers from './resolvers/index';
import dotenv from 'dotenv';
import cors from 'cors'
const bodyParser = require("body-parser");

const { ApolloServer } = require('apollo-server-express');
dotenv.config({path:__dirname+'/./.env'});

import { envChecker } from './utils/env';
import { MongoHelper } from './config/mongo-conn';
envChecker();

const mHelper = new MongoHelper();
mHelper.initiateMongoConnection();

async function startApolloServer() {
  const app = express();
  app.use(bodyParser.urlencoded({extended: true,parameterLimit:1000000,limit:"500mb"}));
  app.use(bodyParser.json({limit: '50mb'}));

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });
  await server.start();
  server.applyMiddleware({ app });
 
  app.use(
    cors({
      origin: process.env.NEXT_APP_URL,
    }),
  );

  app.listen({ port: 4000 });
  console.log(`🚀 Server ready at ${process.env.API_HOST}${server.graphqlPath}`);
  return { server, app };
}

startApolloServer();