import React from 'react'
 
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><a href="https://www.google.ca">  .home</a></li>
                <li><a href="https://www.google.ca">.contact</a></li>
                <li><a href="https://www.google.ca">.notrelated</a></li>
                <li><a href="https://www.linkedin.com/in/patrick-xu-46922813a/" className="fa fa-linkedin" target="_blank" rel="noreferrer" title="LinkedIn"> </a></li>
                <li><a href="https://github.com/patrickxunuo" className="fa fa-github" target="_blank" rel="noreferrer" title="Github"> </a></li>
            </ul>
        </nav>
    )
}

export default Navbar
