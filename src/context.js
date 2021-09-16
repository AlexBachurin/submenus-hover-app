import React, { useContext } from "react";
import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    //get items from data, destructure it right away
    return <AppContext.Provider value=
        {
            {
                sublinks

            }
        }>
        {children}
    </AppContext.Provider>
}

//custom global useContext hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}

