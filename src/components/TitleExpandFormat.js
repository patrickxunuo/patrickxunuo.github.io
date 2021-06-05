import React from 'react'
import Items from './items.js'
import TitleExpand from './TitleExpand.js'
import { BrowserRouter as Switch, Route, Link, useLocation } from "react-router-dom"

const TitleExpandFormat = (props) => {
    const location = useLocation()
    const items = Items.items
    const info = props.title

    return (
        <>
            <div className="title-expand-wrap">
                {info === "internship" && <TitleExpand item={items[2]} />}
                {info === "project" && <TitleExpand item={items[3]} />}
                {info === "contact" && <TitleExpand item={items[4]} />}
                {/* {info === "internship" && <TitleExpand item={items[2]} rect={location.state.rect} />}
                {info === "project" && <TitleExpand item={items[3]} rect={location.state.rect} />}
                {info === "contact" && <TitleExpand item={items[4]} rect={location.state.rect} />} */}
            </div>
        </>
    )
}

export default TitleExpandFormat
