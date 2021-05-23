import React from 'react'
import { Link } from 'react-router-dom'

const Theline = () => {
    return (
        <div className="ball-line">
            <Link to="/" exact className="the-ball" />
            <div className="the-line"></div>
        </div>
    )
}

export default Theline
