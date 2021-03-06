import React, { useState } from 'react'
import { motion } from "framer-motion"
import { BrowserRouter as Switch, Route, Link, useLocation } from "react-router-dom"


const Title = ({ item }) => {

    const [extendState, setExtendState] = useState(false)
    // const [rectState, setRectState] = useState([0, 0, 0, 0])



    // const rectScroll = () => setRectState(
    //     showPos(`#title-${item.content}`)
    // )

    // useEffect(() => {
    //     window.addEventListener("scroll", rectScroll)
    //     return () => window.removeEventListener("scroll", rectScroll)
    // }, [])


    // function showPos(thisId) {
    //     let elem = document.querySelector(thisId);
    //     let rect = elem.getBoundingClientRect();
    //     return [rect.top, rect.bottom, rect.left, rect.right]
    // }

    return (
        <>
            <motion.div layout="true"
                id={`title-${item.content}`}
                className={item.content === "home" ? "title first-title" : "title"}>
                <motion.div>
                    <span className="span-1">patxu.</span>
                    <span className="span-2">{item.content}</span>
                </motion.div>
                {
                    item.item !== null ? <div className="title-item title-time">{item.time}</div> : <></>
                }
                {
                    item.location !== null ? <div className="title-item title-location">{', ' + item.location}</div> : <></>
                }
                {
                    item.what !== null ? <div className="title-item title-what">{item.what}</div> : <></>
                }

                {(item.more) &&
                    <div>
                        <Link
                            to={{
                                pathname: `/${item.content}`,
                                // state: {
                                //     rect: rectState
                                // }
                            }}>
                            <motion.input className="more-btn" type="button" value="More" 
                            onClick={() => {
                                setExtendState(!extendState)
                            }}
                            whileHover={{ scale: 1.1 }} ></motion.input></Link>
                        <span className="title-arrow-more">{'-->'}</span>
                    </div>
                }
            </motion.div>
            <div className="space-block" />
        </>
    )
}

export default Title
