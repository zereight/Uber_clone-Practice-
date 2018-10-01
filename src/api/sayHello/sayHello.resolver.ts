import {Greeting} from "../../types/graph";

const resolvers = {
    Query: {
        sayHello: ():Greeting => {
            return {
                text: "say hello",
                error: false
            };
        }
    }
}

export default resolvers;