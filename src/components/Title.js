import React, { useState, useEffect } from 'react'
import "aos/dist/aos.css"
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"


const Title = ({ item }) => {

    const [extendState, setExtendState] = useState(false)
    const [rectState, setRectState] = useState([0, 0, 0, 0])



    const rectScroll = () => setRectState(
        showPos(`#title-${item.content}`)
    )

    useEffect(() => {
        window.addEventListener("scroll", rectScroll)
        return () => window.removeEventListener("scroll", rectScroll)
    }, [])


    // const titleExpand = {
    //     open: { scale: 1.01, position: "fixed", top: "50%", left: "50%", boxShadow: "5px 5px 15px 5px rgba(0,128,0, 0.8)", zIndex: 99999, x: "-50", y: "-50", background: "var(--grain)" },
    //     closed: { scale: 1, position: "relative", top: 0, left: 0, boxShadow: "5px 5px 15px 5px rgba(0,128,0, 0)", zIndex: 0, margin: 0, marginBottom: "2em", x: "0", y: "0", background: "var(--graino)" },
    //     titleOpen: { display: "none" },
    //     titleClosed: { display: "block" }
    // }
    // const canvasExpand = {
    //     open: { display: "block", opacity: 0.85, zIndex: 88888, right: 0, bottom: "-500px" },
    //     closed: { display: "none", opacity: 0, zIndex: -1 }
    // }

    function showPos(thisId) {
        let elem = document.querySelector(thisId);
        let rect = elem.getBoundingClientRect();
        return [rect.top, rect.bottom, rect.left, rect.right]
    }

    return (
        <>
            {/* <motion.div layout="true"
                className="title-canvas"
                animate={extendState ? "open" : "closed"}
                variants={canvasExpand}></motion.div> */}

            <motion.div layout="true"
                id={`title-${item.content}`}
                className={item.content === "home" ? "title first-title" : "title"}
            // animate={extendState ? "open" : "closed"}
            // variants={titleExpand}
            // transformTemplate={
            //     ({ x, y }) => `translateX(${x}%) translateY(${y}%)`
            // }
            >
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


                {/* {(item.more && extendState === true) &&
                    <div>
                        <AnimatePresence>
                            {item.more && <Extens identifier={item.extens} />}
                        </AnimatePresence>
                        <motion.input className="more-btn" type="button" value="Back" onClick={() => setExtendState(!extendState)} whileHover={{ scale: 1.1 }} ></motion.input>
                        <span className="title-arrow-back">{'<--'}</span>
                    </div>
                } */}

                {(item.more) &&
                    <div>

                        <Link
                            to={{
                                pathname: `/${item.content}`,
                                state: {
                                    rect: rectState
                                }
                            }}
                        >
                            <motion.input className="more-btn" type="button" value="More" onClick={() => setExtendState(!extendState)} whileHover={{ scale: 1.1 }} ></motion.input></Link>
                        <span className="title-arrow-more">{'-->'}</span>
                    </div>
                }
            </motion.div>
            <div className="space-block" />
        </>
    )
}

export default Title
