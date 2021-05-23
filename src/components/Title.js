import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
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
            {
                item.item !== null ? <div className="title-item title-time">{item.time}</div> : <></>
            }
            {
                item.location !== null ? <div className="title-item title-location">{', ' + item.location}</div> : <></>
            }
            {
                item.what !== null ? <div className="title-item title-what">{item.what}</div> : <></>
            }

            <Link to={`/${item.extens}`}>
                {item.more && <input className="more-btn" type="button" value="More" />}
                {item.more && <span className="title-arrow">{'-->'}</span>}
            </Link>
            <div className="space-block"></div>
        </div>
    )
}

export default Title
