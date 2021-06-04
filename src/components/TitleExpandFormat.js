import React from 'react'
import Items from './items.js'
import TitleExpand from './TitleExpand.js'
import { motion } from 'framer-motion'
import { BrowserRouter as Switch, Route, useLocation, useParams, Link } from "react-router-dom"

const TitleExpandFormat = () => {
    const { info } = useParams()
    const location = useLocation()
    const items = Items.items

    return (
        <>
            <div className="title-expand-wrap">
                {info === "internship" && <TitleExpand item={items[2]} rect={location.state.rect} />}
                {info === "project" && <TitleExpand item={items[3]} rect={location.state.rect} />}
                {info === "contact" && <TitleExpand item={items[4]} rect={location.state.rect} />}
            </div>

        </>
    )
}

export default TitleExpandFormat
