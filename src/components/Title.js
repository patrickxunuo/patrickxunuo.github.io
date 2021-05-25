import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import Extens from './Extens.js'
import { CSSTransition } from 'react-transition-group';

const Title = ({ item }) => {
    useEffect(() => {
        AOS.init({})
    }, [])

    const [extendState, setExtendState] = useState(false)

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
            {!item.more &&
                <div className="space-block" />
            }

            {(item.more && extendState === true) &&
                <div>
                    <CSSTransition timeout={500}>
                        <div>
                            {item.more && <Extens identifier={item.extens} />}
                        </div>
                    </CSSTransition>
                    <input className="more-btn" type="button" value="Back" onClick={() => setExtendState(!extendState)} />
                    <span className="title-arrow-back">{'<--'}</span>
                </div>
            }

            {(item.more && extendState === false) &&
                <div>
                    <input className="more-btn" type="button" value="More" onClick={() => setExtendState(!extendState)} />
                    <span className="title-arrow-more">{'-->'}</span>
                    <div className="space-block" />
                </div>
            }
        </div>
    )
}

export default Title
