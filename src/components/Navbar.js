import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav>
            <ul>
                <li><Link to='/' onClick={props.toggleState}>.home</Link></li>
                <li><Link to='/notrelated' onClick={props.toggleState}>.notrelated</Link></li>
                <li><a href="https://www.linkedin.com/in/patrick-xu-46922813a/" className="fa fa-linkedin" target="_blank" rel="noreferrer" title="LinkedIn"> </a><a href="https://github.com/patrickxunuo" className="fa fa-github" target="_blank" rel="noreferrer" title="Github"> </a></li>
            </ul>
        </nav>
    )
}

export default Navbar
