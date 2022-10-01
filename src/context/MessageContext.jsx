import React, { createContext, useState } from 'react'

const ContextProvider = createContext();

export function MessageContext({ children }) {
    const [message, setMessage] = useState([])
    console.log("🚀 ~ file: MessageContext.jsx ~ line 7 ~ MessageContext ~ message", message)

    return (
        <ContextProvider.Provider value={{ setMessage, message }}>
            {children}
        </ContextProvider.Provider>
    )

}

export default ContextProvider