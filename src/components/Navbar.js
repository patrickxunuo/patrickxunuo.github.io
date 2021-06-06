import React from 'react'
import { BrowserRouter as Switch, Route, Link, useLocation } from "react-router-dom"

const Navbar = (props) => {
    const toggleState = props.toggleState
    const changepage = props.changepage
    const pathname = props.pathname
    let homeColor = "grey"
    let notColor = "var(--black)"
    let homeUserSelect = "none"
    let notUserSelect = "auto"
    let homeCursor = "default"
    let notCursor = "pointer"

    if (pathname == "/") {

    }
    else if (pathname !== "/home") {
        homeColor = "var(--black)"
        notColor = "grey"
        homeUserSelect = "auto"
        notUserSelect = "none"
        homeCursor = "pointer"
        notCursor = "default"
        if (pathname !== "/notrelated") {
            notColor = "var(--black)"
            notUserSelect = "auto"
            notCursor = "pointer"
        }
    }

    return (
        <nav>
            <ul>
                <li><Link to='/home' onClick={() => {
                     toggleState()
                     changepage("home")
                }} style={{ color: homeColor, userSelect: homeUserSelect, cursor: homeCursor }} >.home</Link></li>
                <li><Link to='/notrelated' onClick={() => {
                     toggleState()
                     changepage("not")
                }} style={{ color: notColor, userSelect: notUserSelect, cursor: notCursor }} >.notrelated</Link></li>
                <li><a href="https://www.linkedin.com/in/patrick-xu-46922813a/" className="fa fa-linkedin" target="_blank" rel="noreferrer" title="LinkedIn"> </a><a href="https://github.com/patrickxunuo" className="fa fa-github" target="_blank" rel="noreferrer" title="Github"> </a></li>
            </ul>
        </nav>
    )
}

export default Navbar
