import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ApplicationContext } from './../Context/ApplicationContext'

import { MdShoppingCart, MdSentimentSatisfied, MdMenu } from "react-icons/md";

const Header = () => {
    const {menu, setMenu} = useContext(ApplicationContext)

    return (
        <>
            <header className="py-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-4 d-md-none toggle-menu" onClick={ ()=> setMenu(!menu) }><MdMenu /></div>
                        <div className="col-8 col-md-4 col-xl-3 header-right">
                            <div className="language"><Link to="/contact-us">ع</Link></div>
                            <div className="cart"><Link to="/cart"><MdShoppingCart /></Link></div>
                            <div className="profile"><Link to="/profile"><MdSentimentSatisfied /></Link></div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header