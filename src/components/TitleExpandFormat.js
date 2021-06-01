import React from 'react'
import Items from './items.js';
import TitleExpand from './TitleExpand.js';
import { BrowserRouter as Switch, Route, useLocation } from "react-router-dom";

const TitleExpandFormat = () => {
    const location = useLocation()
    const items = Items.items
    const pathname = location.pathname
    
    return (
        <div className="title-expand-wrap">
            {pathname==="/internship" && <TitleExpand item={items[2]} rect={location.state.rect}/>}
            {pathname==="/project" && <TitleExpand item={items[3]} rect={location.state.rect}/>}
            {pathname==="/contact" && <TitleExpand item={items[4]} rect={location.state.rect}/>}
        </div>
    )
}

export default TitleExpandFormat
