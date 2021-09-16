import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context';
const Navbar = () => {
    const { sublinks } = useGlobalContext();
    return (
        <nav className="nav">
            <div className="nav-center">
                <div className="nav-header">
                    <img src="https://res.cloudinary.com/dljezd6qv/image/upload/v1631668811/logo-horizontal_yiro1i.png" alt="logo" className="nav-logo" />
                    <button className="toggle-btn"><FaBars /></button>
                </div>
                <ul className="nav-links">
                    {/* dynamically show links */}
                    {sublinks.map((link, index) => {
                        const { page } = link;
                        return (
                            <li key={index}>
                                <button className="link-btn">{page}</button>
                            </li>
                        )
                    })}
                </ul>
                <button className="btn signin-btn">Sign in</button>
            </div>
        </nav>
    )
}

export default Navbar
