import {Greeting ,SayByeQueryArgs} from "../../types/graph";

const resolvers = {
    Query: {
        sayBye: ( _, args : SayByeQueryArgs ):Greeting => {
            return {
                text: `Bye! ${args.name}`,
                error: false
             }; 
            
        }
    }
}

export default resolvers;