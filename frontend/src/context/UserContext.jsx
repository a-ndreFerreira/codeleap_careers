import { createContext, useState } from "react";

export const UserContext = createContext(null)

export const UserContextProvider = ({ children }) => {
    const [usernameContext, setUsernameContext] = useState('');
    return (
        <UserContext.Provider value={{ usernameContext, setUsernameContext }}>
            {children}
        </UserContext.Provider>
    )
}