import React, { useState } from 'react'
import ContactForm from './ContactForm'
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"

export const Extens = (props) => {

    const [internState, setInternState] = useState(1);

    const internSelect = {
        open: { background: "var(--purple)", color: "var(--white)" },
        closed: { background: "var(--black)", color: "var(--purple)" }
    }


    let inside = (<></>)
    switch (props.identifier) {
        case 'intership':
            inside =
                <motion.div className="intern-wrap">
                    <div className="inter-picker-wrap">
                        <input type="radio" id="intern-1" onClick={() => {
                            setInternState(1)
                        }} />
                        <motion.label htmlFor="intern-1" className="intern-picker"
                            animate={internState === 1 ? "open" : "closed"}
                            variants={internSelect}>
                            Intern #1
                        </motion.label>
                        <input type="radio" id="intern-2" onClick={() => {
                            setInternState(2)
                        }}
                        />
                        <motion.label htmlFor="intern-2" className="intern-picker"
                            animate={internState === 2 ? "open" : "closed"}
                            variants={internSelect}>
                            Intern #2
                        </motion.label>
                    </div>
                    {internState === 1 && <ul className="intern-des intern-1" >
                        <li style={{ color: "var(--purple)" }}>
                            May - Dec 2019 Beijing, China
                        </li>
                        <li>
                            Designed a B2B solution for internal stakeholders to organize tasks and meetings
                        </li>
                        <li>
                            Developed and delivered a approval system B2B solution and participated in the
                            entire product life cycle
                        </li>
                        <li>
                            Optimized the digital platform as needed on a daily basis
                        </li>
                        <li>
                            Performed general testings and maintenance on the digital platform
                        </li>
                    </ul>}
                    {internState === 2 && <ul className="intern-des intern-2">
                        <li style={{ color: "var(--purple)" }}>
                            Jan - Dec 2018 Vancouver, Canada
                        </li>
                        <li>
                            Customized and delivered classes for students on robots and programming
                        </li>
                        <li>
                            Organized and coached robotic competitions
                        </li>
                    </ul>}
                </motion.div>
            break
        case 'project':
            inside =
                <div style={{ color: 'red' }}>
                    wtf2
                </div>
            break
        case 'contact':
            inside = <ContactForm />
            break
        default:
            inside = <></>
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            {inside}
        </motion.div>
    )
}
export default Extens