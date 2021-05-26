import React, {  useState } from 'react'
import "aos/dist/aos.css"
import Extens from './Extens.js'
import { motion } from "framer-motion"

const Title = ({ item }) => {
 
    const [extendState, setExtendState] = useState(false)

    return (
        <motion.div className={item.content==="home"?"title first-title":"title"} whileHover={item.content!=="home"&&{ scale: 1.03, transition: { duration: 0.3 } }} >
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
                        <div>
                            {item.more && <Extens identifier={item.extens} />}
                        </div>
                    <motion.input className="more-btn" type="button" value="Back" onClick={() => setExtendState(!extendState)}  whileHover={{ scale: 1.1 }}/>
                    <span className="title-arrow-back">{'<--'}</span>
                </div>
            }

            {(item.more && extendState === false) &&
                <div>
                    <motion.input className="more-btn" type="button" value="More" onClick={() => setExtendState(!extendState)} whileHover={{ scale: 1.1 }}/>
                    <span className="title-arrow-more">{'-->'}</span>
                    <div className="space-block" />
                </div>
            }
        </motion.div>
    )
}

export default Title
