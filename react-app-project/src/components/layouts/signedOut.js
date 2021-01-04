import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedOut = () =>{
    return(
        <ul className="right">
            <li><NavLink to="/Signup">Sign Up</NavLink></li>
            <li><NavLink to="/SignIn">Login</NavLink></li>
        </ul>
    )
}
export default SignedOut;