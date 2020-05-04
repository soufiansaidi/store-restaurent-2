import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ApplicationContext } from './../Context/ApplicationContext'
import { FiMapPin, FiPhoneCall, FiUser } from "react-icons/fi";

const Menu = () => {
    const {menu, setMenu} = useContext(ApplicationContext)

    const closeMenu = () => {
        setMenu(!menu)
    }

    return (
        <div className={ (menu) ? 'active menu-mobile' : 'menu-mobile' }>
            <div className="menu-close" onClick={ ()=> setMenu(!menu) }></div>
            <div className="wrap">
                <ul>
                    <li><Link onClick={() => closeMenu()} to="/menus"><FiUser />My account</Link></li>
                    <li><Link onClick={() => closeMenu()} to="/branches"><FiMapPin />Branches</Link></li>
                    <li><Link onClick={() => closeMenu()} to="/about"><FiPhoneCall />+965 50825193</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu