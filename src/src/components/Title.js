import React, { useState } from 'react'
import "aos/dist/aos.css"
import Extens from './Extens.js'
import { motion, AnimateSharedLayout, AnimatePresence, animate } from "framer-motion"
import Image8 from './svg/image8.jpg'

const Title = ({ item }) => {

    const [extendState, setExtendState] = useState(false)
    const titleExpand = {
        open: { scale: 1.01, position: "fixed", top: "50%", left: "50%", boxShadow: "5px 5px 15px 5px black", zIndex: 99999, x: "-50", y: "-50" },
        closed: { scale: 1, position: "relative", top: 0, left: 0, boxShadow: "none", zIndex: 0, margin: 0, marginBottom: "2em", x: "0", y: "0" },
        titleOpen: { display: "none" },
        titleClosed: { display: "block" }
    }
    const canvasExpand = {
        open: { display: "block", opacity: 0.85, zIndex: 88888, right: 0, bottom: "-500px" },
        closed: { display: "none", opacity: 0, zIndex: -1 }
    }


    return (
        <motion layout>
            <motion.div layout
                className="title-canvas"
                animate={extendState ? "open" : "closed"}
                variants={canvasExpand}></motion.div>

            <motion.div layout className={item.content === "home" ? "title first-title" : "title"}
                animate={extendState ? "open" : "closed"}
                variants={titleExpand}
                transformTemplate={
                    ({ x, y }) => `translateX(${x}%) translateY(${y}%)`
                }>

                <motion.div
                    animate={extendState ? "titleOpen" : "titleClosed"}
                    variants={titleExpand}>
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

                {(item.more && extendState === true) &&
                    <div>
                        <AnimatePresence>
                            {item.more && <Extens identifier={item.extens} />}
                        </AnimatePresence>
                        <motion.input className="more-btn" type="button" value="Back" onClick={() => setExtendState(!extendState)} whileHover={{ scale: 1.1 }} />
                        <span className="title-arrow-back">{'<--'}</span>
                    </div>
                }

                {(item.more && extendState === false) &&
                    <div>
                        <motion.input className="more-btn" type="button" value="More" onClick={() => setExtendState(!extendState)} whileHover={{ scale: 1.1 }} />
                        <span className="title-arrow-more">{'-->'}</span>
                    </div>
                }
            </motion.div>
        </motion>
    )
}

export default Title
