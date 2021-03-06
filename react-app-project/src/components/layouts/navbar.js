import React from 'react'
import {Link} from 'react-router-dom'
import SignedIn from './signedIn'
import SignedOut from './signedOut'

const Navbar = () =>{
    return(
        <nav className="nav-wrapper grey">
            <div className="container">
                <Link to='/' className="brand-logo">My-App</Link>
                <SignedIn/>
                <SignedOut/>
            </div>
        </nav>


    )
}
export default Navbar;