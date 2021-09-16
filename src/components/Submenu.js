import React from 'react'
import { useGlobalContext } from '../context'
const Submenu = () => {
    const { isSubmenuOpen } = useGlobalContext();
    //classname to toggle submenu
    let clsName = `${isSubmenuOpen ? 'submenu show' : 'submenu'}`
    return (
        <aside className={clsName}>
            <section>
                <h4>products</h4>
                <div className="submenu-center">
                    <a href="#">payment</a>
                </div>
            </section>
        </aside>
    )
}

export default Submenu
