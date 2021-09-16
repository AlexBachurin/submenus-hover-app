import React from 'react'
import { GrClose } from 'react-icons/gr';
import { useGlobalContext } from '../context';
const Sidebar = () => {
    const { sublinks, closeSidebar, isSidebarOpen } = useGlobalContext();
    //dynimic className for sidebar
    let clsName = `${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`;
    return (
        <div className={clsName}>
            <aside className="sidebar">
                <button onClick={closeSidebar} className="close-btn"><GrClose /></button>
                <div className="sidebar-links">
                    {/* first get page name from data by iterating through sublinks first time */}
                    {sublinks.map((item, index) => {
                        const { page, links } = item;
                        return (
                            <article key={index} >
                                <h4 >{page}</h4>
                                <div className="sidebar-sublinks">
                                    {/* then iterate through sublinks */}
                                    {links.map((link, index) => {
                                        const { label, icon, url } = link;
                                        return (
                                            <a key={index} href={url}>{icon}{label}</a>
                                        )
                                    })}
                                </div>
                            </article>


                        )
                    })}

                </div>
            </aside>
        </div>
    )
}

export default Sidebar
