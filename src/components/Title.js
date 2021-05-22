import React, { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"

const Title = ({ item }) => {
    useEffect(() => {
        AOS.init({})
    }, [])
    return (
        <div className="title" data-aos="flip-up" data-aos-anchor-placement="top-center">
            <div>
                <span className="span-1">patxu.</span>
                <span className="span-2">{item.content}</span>
            </div>
            <div className="title-location">{item.location},&nbsp;</div>
            <div className="title-time">{item.time}</div>
            <div className="title-what">{item.what}</div>
            <div className="space-block"></div>
        </div>
    )
}

export default Title
