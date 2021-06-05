import React from 'react'
import Title from './Title.js'
import Theline from './Theline.js'
import Items from './items.js'
import { BrowserRouter as Switch, Route, Link, useLocation } from "react-router-dom"

export const Maincontainer = () => {
    const items = Items.items

    return (
        <div className="main-container">
            <Theline />
            {items.map((item) => (<Title item={item} key={item.id} />))}
        </div>
    )
}

export default Maincontainer
