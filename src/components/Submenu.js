import React, { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from '../context'
const Submenu = () => {
    const { sublinks, isSubmenuOpen, location, page } = useGlobalContext();
    //classname to toggle submenu
    let clsName = `${isSubmenuOpen ? 'submenu show' : 'submenu'}`;
    //get ref for submenu so we can access it as node, and change its style
    const submenuRef = useRef(null);
    //state for links for current hovered page
    const [submenuItem, setSubmenuItem] = useState({});
    //useEffect to change submenu position on every location change
    useEffect(() => {
        //get calculated coords
        const { center, top } = location;
        //set it to style of submenu
        submenuRef.current.style.left = `${center}px`;
        submenuRef.current.style.top = `${top}px`

        //also watch change of page state and get sublinks based on this page state
        const elem = sublinks.find((item) => {
            return item.page === page;
        })
        console.log(elem);
        setSubmenuItem(elem);
    }, [location, page])
    return (
        <aside ref={submenuRef} className={clsName}>
            <section>
                <h4>{page}</h4>
                <div className="submenu-center">
                    {/* get links from our state element  */}
                    {submenuItem.links.map((item, index) => {
                        const { label, icon, url } = item;
                        return (
                            <a key={index} href={url}>{icon}{label}</a>
                        )
                    })}
                </div>
            </section>
        </aside>
    )
}

export default Submenu
