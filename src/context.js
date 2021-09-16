import React, { useContext, useState } from "react";
import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    //state for sidebar and submenu
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    //state for location of button
    const [location, setLocation] = useState({});
    //state for text of hovered element
    const [page, setPage] = useState('');
    // SIDEBAR
    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }
    //SUBMENU
    const showSubmenu = (e) => {
        //need to get target location as we hover on the button
        const btnCoords = e.target.getBoundingClientRect();
        //calculate location so submenu will be on center of our button and a bit on top of it, so it wont close
        const coords = { center: (btnCoords.left + btnCoords.right) / 2, top: btnCoords.bottom - 3 };
        //set location to state
        //get text content of page which links we need to show
        const text = e.target.textContent;
        setPage(text);
        setLocation(coords);
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
                closeSubmenu,
                location,
                page

            }
        }>
        {children}
    </AppContext.Provider>
}

//custom global useContext hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}

