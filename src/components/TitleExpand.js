import React, { useState } from 'react'
import ContactForm from './ContactForm.js'
import { motion } from 'framer-motion'

const TitleExpand = (props) => {
    const item = props.item
    const rect = props.rect
    const [internState, setInternState] = useState(1);
    const [projectState, setProjecState] = useState(1);

    const internSelect = {
        open: { background: "rgba(128, 128, 128,1)", color: "var(--white)" },
        closed: { background: "var(--grain)", color: "var(--black)" }
    }
    const projectSelect = {
        open: { background: "rgba(128, 128, 128,1)", color: "var(--white)" },
        closed: { background: "var(--grain)", color: "var(--black)" }
    }

    return (
        <>
                <motion.div className="title-expand" style={{ top: rect[0], left: rect[2] }}
                    animate={{
                        scale: 1.5,
                        top: "10%",
                        left: "50%",
                        translateX: "-50%",
                        translateY: "-50%",
                        transition: { duration: 1, ease: "easeInOut" },
                    }} exit={{
                        opacity: 0,
                        y: '-10vh',
                        transition: { ease: "easeInOut" }
                    }}>
                    <span className="span-1">patxu.</span>
                    <span className="span-2">{item.content}</span>
                </motion.div>
                <motion.div className="expand-line"
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 0.5,
                        transition: { delay: 1, duration: 1, ease: "easeInOut" },
                    }} exit={{
                        opacity: 0,
                        y: '-10vh',
                        transition: { ease: "easeInOut" }
                    }}></motion.div>
                {item.content === "contact" &&
                    <ContactForm />}
                {item.content === "internship" &&
                    <motion.div className="intern-wrap" initial={{
                        opacity: 0
                    }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 1, duration: 1, ease: "easeInOut" }
                        }}
                        exit={{
                            opacity: 0,
                            y: '+10vh',
                            transition: { ease: "easeInOut" }
                        }}>
                        <div className="intern-picker-wrap">
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
                            <li style={{ color: "grey" }}>
                                May - Dec 2019 Beijing, China
                            </li>
                            <li>
                                ● Designed a B2B solution for internal stakeholders to organize tasks and meetings
                            </li>
                            <li>
                                ● Developed and delivered a approval system B2B solution and participated in the
                                entire product life cycle
                            </li>
                            <li>
                                ● Optimized the digital platform as needed on a daily basis
                            </li>
                            <li>
                                ● Performed general testings and maintenance on the digital platform
                            </li>
                        </ul>}
                        {internState === 2 && <ul className="intern-des intern-2">
                            <li style={{ color: "grey" }}>
                                Jan - Dec 2018 Vancouver, Canada
                            </li>
                            <li>
                                ● Customized and delivered classes for students on robots and programming
                            </li>
                            <li>
                                ● Organized and coached robotic competitions
                            </li>
                        </ul>}
                    </motion.div>}

                {item.content === "project" &&
                    <motion.div className="project-wrap" initial={{
                        opacity: 0
                    }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 1, duration: 1, ease: "easeInOut" }
                        }}
                        exit={{
                            opacity: 0,
                            y: '+10vh',
                            transition: { ease: "easeInOut" }
                        }}>
                        <div className="project-picker-wrap">
                            <input type="radio" id="project-1" onClick={() => {
                                setProjecState(1)
                            }} />
                            <motion.label htmlFor="project-1" className="project-picker"
                                animate={projectState === 1 ? "open" : "closed"}
                                variants={projectSelect}>
                                Project #1
                            </motion.label>
                            <input type="radio" id="project-2" onClick={() => {
                                setProjecState(2)
                            }}
                            />
                            <motion.label htmlFor="project-2" className="project-picker"
                                animate={projectState === 2 ? "open" : "closed"}
                                variants={projectSelect}>
                                Project #2
                            </motion.label>
                            <input type="radio" id="project-3" onClick={() => {
                                setProjecState(3)
                            }}
                            />
                            <motion.label htmlFor="project-3" className="intern-picker"
                                animate={projectState === 3 ? "open" : "closed"}
                                variants={projectSelect}>
                                Project #3
                            </motion.label>
                            <input type="radio" id="project-4" onClick={() => {
                                setProjecState(4)
                            }}
                            />
                            <motion.label htmlFor="project-4" className="intern-picker"
                                animate={projectState === 4 ? "open" : "closed"}
                                variants={projectSelect}>
                                Project #4
                            </motion.label>
                        </div>
                        {projectState === 1 && <ul className="project-des project-1" >
                            <li style={{ color: "grey" }}>
                                Object, Key and Results Portal
                            </li>
                            <li>
                                ● Designed and developed a web-based B2B solution which has features including
                                dashboard showing tasks on progress, calendar showing past and scheduled
                                tasks and meetings, discussion area showing comments and problems, etc
                            </li>
                            <li>
                                ● The portal makes distributing tasks, scheduling meetings and discussing problems
                                more efficient
                            </li>
                            <li>
                                ● Used HTML, JavaScript, CSS, C#
                            </li>
                        </ul>}
                        {projectState === 2 && <ul className="project-des project-2">
                            <li style={{ color: "grey" }}>
                                Approval System Solution
                            </li>
                            <li>
                                ● Developed and delivered B2B solutions including functionalities such as
                                application webpage, application process workflow handling, automatic email
                                sending, etc
                            </li>
                            <li>
                                ● Participate in iterative product updates after delivery to optimize user experience
                            </li>
                            <li>
                                ● Used HTML, JavaScript, CSS, C#
                            </li>
                        </ul>}
                        {projectState === 3 && <ul className="project-des project-3">
                            <li style={{ color: "grey" }}>
                                Handwriting Recognition Application
                            </li>
                            <li>
                                ● Designed the workflow and logics for both numerical and alphabetical
                                recognition of the application, and developed into codes
                            </li>
                            <li>
                                ● Designed and developed the user interface for the application for IOS system
                            </li>
                            <li>
                                ● Used Python and Kivy framework
                            </li>
                        </ul>}
                        {projectState === 4 && <ul className="project-des project-4">
                            <li style={{ color: "grey" }}>
                                <a href="http://patrickxunuo.great-site.net/" style={{ color: "var(--black)" }} target="_blank" rel="noreferrer">First Personal Website</a>
                            </li>

                        </ul>}
                    </motion.div>}
        </>
    )
}

export default TitleExpand
