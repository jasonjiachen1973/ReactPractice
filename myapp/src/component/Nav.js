import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
    return (
    <div class="topnav">
        <Link to="./">Main</Link>
        <Link to="./about">About</Link>
        <Link to="./services">Services</Link>
    </div>
    )
}
