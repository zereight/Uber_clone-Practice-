
import app from "./app";

import { Options } from "graphql-yoga";



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

app.start( appOptions, handling_start );