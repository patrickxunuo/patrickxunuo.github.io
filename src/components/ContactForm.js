import React from 'react'
import "aos/dist/aos.css"
import { motion } from 'framer-motion'

const ContactForm = () => {

    return (
        <motion.form action="https://formsubmit.co/patrickxunuo@hotmail.com" method="POST" initial={{
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
            }}
        >
            <div className="form-item form-name">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
            </div>
            <div className="form-item form-email">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
            </div>
            <div className="form-item form-subject">
                <label htmlFor="subject">Subject</label>
                <input type="text" name="subject" />
            </div>
            <div className="form-item form-message">
                <label htmlFor="message">Message</label>
                <textarea type="text" name="message" />
            </div>
            <div className="form-item form-submit">
                <button type="submit" id="form-submit">Send</button>
            </div>
        </motion.form>
    )
}

export default ContactForm
