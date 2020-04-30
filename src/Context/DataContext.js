import React, { createContext, useState } from 'react'

export const DataContext = createContext()

export const DataContextProvider = ({children}) => {
    
    return (
        <DataContext.Provider value="">
            { children }
        </DataContext.Provider>
    )
}