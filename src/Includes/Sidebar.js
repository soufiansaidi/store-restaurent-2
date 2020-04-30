import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <aside style={{ backgroundImage: 'url(https://via.placeholder.com/600x800)' }}>
            <div className="top">
                <div className="menu">
                    <Link to="/">Menu</Link>
                    <Link to="/">Branches</Link>
                </div>
                <div className="language">
                    <Link to="/">ع</Link>
                </div>
            </div>
            <div className="store-logo">
                <img src="https://dml32v1x15q41.cloudfront.net/v1/image/static/df8a2733-6a6f-4242-9c46-98b6a1f38704/120x120" alt="" />
                <div className="store-name">Store Name</div>
            </div>
        </aside>
    )
}
