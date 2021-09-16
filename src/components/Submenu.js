import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'
const Submenu = () => {
    const { isSubmenuOpen, location } = useGlobalContext();
    //classname to toggle submenu
    let clsName = `${isSubmenuOpen ? 'submenu show' : 'submenu'}`;
    //get ref for submenu so we can access it as node, and change its style
    const submenuRef = useRef(null)
    //useEffect to change submenu position on every location change
    useEffect(() => {
        //get calculated coords
        const { center, top } = location;
        //set it to style of submenu
        submenuRef.current.style.left = `${center}px`;
        submenuRef.current.style.top = `${top}px`

    }, [location])
    return (
        <aside ref={submenuRef} className={clsName}>
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
