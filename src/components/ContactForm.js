import React from 'react'
import "aos/dist/aos.css"

const ContactForm = () => {

    return (
        <form action="https://formsubmit.co/patrickxunuo@hotmail.com" method="POST">
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

        </form>
    )
}

export default ContactForm
