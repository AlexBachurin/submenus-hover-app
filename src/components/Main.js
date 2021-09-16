import React from 'react'
import { useGlobalContext } from '../context'
const Main = () => {
    return (
        <section className='main'>
            <div className="main-center">
                <div className="main-info">
                    <h1>
                        Payments infrastructure
                        for the internet
                    </h1>
                    <p>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
                    <button className="btn">Start now</button>
                </div>
                <div className="main-images">
                    <img src="https://res.cloudinary.com/dljezd6qv/image/upload/v1631773064/react-submenu/phone.58d7e3d6_udu3b7.svg" alt="phone" className="phone-img" />
                </div>
            </div>
        </section >
    )
}

export default Main
