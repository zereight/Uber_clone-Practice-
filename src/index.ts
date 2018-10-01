
import app from "./app";

import { Options } from "graphql-yoga";

import { createConnection  } from "typeorm";
import connectionOptions from "./ormConfig";

const PORT : number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT : string = "/playground";
const GRAPHQL_ENDPOINT : string = "/graphql";

const appOptions : Options = {
    port: PORT,
    playground: PLAYGROUND_ENDPOINT,
    endpoint: GRAPHQL_ENDPOINT
};

const handling_start = ():void => {
  console.log(`Start with Port : ${PORT}`);  
};

createConnection( connectionOptions ).then(
    () => {
      app.start( appOptions, handling_start );
    }  
);
  