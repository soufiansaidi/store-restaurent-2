import React, { createContext, useState } from 'react'

export const ApplicationContext = createContext()

export const ApplicationContextProvider = ({children}) => {
    const [menu, setMenu] = useState(false)

    return (
        <ApplicationContext.Provider value={{ menu, setMenu }}>
            { children }
        </ApplicationContext.Provider>
    )
}