import React, { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from '../context'
const Submenu = () => {
    const { isSubmenuOpen, location, submenuItem } = useGlobalContext();
    //classname to toggle submenu
    let clsName = `${isSubmenuOpen ? 'submenu show' : 'submenu'}`;
    //get ref for submenu so we can access it as node, and change its style
    const submenuRef = useRef(null);

    //state for class to dynamically change width of submenu based on how many links we have
    const [submenuWidth, setSubmenuWidth] = useState('col-2');

    //useEffect to change submenu position on every location change
    useEffect(() => {
        setSubmenuWidth('col-2')
        //get calculated coords
        const { center, top } = location;
        //set it to style of submenu
        submenuRef.current.style.left = `${center}px`;
        submenuRef.current.style.top = `${top}px`
        if (submenuItem.links.length === 3) {
            setSubmenuWidth('col-3')
        } else if (submenuItem.links.length === 4) {
            setSubmenuWidth('col-4');
        }


    }, [location, submenuItem.links])



    return (
        <aside ref={submenuRef} className={clsName}>
            <section>
                <h4>{submenuItem.page}</h4>
                <div className={`submenu-center ${submenuWidth}`}>
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
