export const typeDefs = ["type Query {\n  sayBye(name: String!): Greeting!\n  sayHello: Greeting!\n}\n\ntype Greeting {\n  text: String!\n  error: Boolean!\n}\n"];
/* tslint:disable */

export interface Query {
  sayBye: Greeting;
  sayHello: Greeting;
}

export interface SayByeQueryArgs {
  name: string;
}

export interface Greeting {
  text: string;
  error: boolean;
}
