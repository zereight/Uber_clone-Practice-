import {
    FacebookConnectMutationArgs,
    FacebookConnectResponse
} from "../../../types/graph";

import {Resolvers} from "../../../types/resolvers";
import User from "../../../entities/User";

const resolvers : Resolvers = {
    Mutation: {
        FacebookConnect: async (_, args : FacebookConnectMutationArgs): Promise<FacebookConnectResponse> => {
            const {fbId} = args;
            
            try {
                const existingUser = await User.findOne( {fbId} );
                
                if(existingUser){
                    return {
                        ok: true,
                        error: null,
                        token: "This User already exist"
                    };
                }
                else {
                    try{
                        
                        await User.create({
                            ...args,
                            profilePhoto: `http://graph.facebook.com/${fbId}/picture?type=square`
                        }).save();
                        
                        return {
                            ok: false,
                            error: "The User is not exist",
                            token: null
                        };
                    }
                    catch(error){
                        return {
                            ok: false,
                            error: error.message,
                            token: null
                        };
                    }
                }
                
            }
            catch(error){
                return {
                    ok: false,
                    error: error.message,
                    token: null
                };
            }
        }
    }
};

export default resolvers;
