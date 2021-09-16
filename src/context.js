import React, { useContext, useState } from "react";
import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    //state for sidebar and submenu
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    // SIDEBAR
    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }
    //SUBMENU
    const showSubmenu = () => {
        setIsSubmenuOpen(true)
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }






    return <AppContext.Provider value=
        {
            {
                sublinks,
                isSidebarOpen,
                isSubmenuOpen,
                openSidebar,
                showSubmenu,
                closeSidebar,
                closeSubmenu

            }
        }>
        {children}
    </AppContext.Provider>
}

//custom global useContext hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}

