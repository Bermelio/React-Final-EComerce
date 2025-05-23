import { createContext, useState } from "react";

export const userContext = createContext(false);

export function userContext({children}){
    
    const [user, setUser] = useState([false])

    return (
        <userContext.Provider value={[user, setUser]}> 
            {children}
        </userContext.Provider>
    )
}

export default userContext;