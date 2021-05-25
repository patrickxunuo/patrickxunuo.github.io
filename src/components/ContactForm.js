import React, { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"

const ContactForm = () => {

    const sendClicked = () => {

        const name = document.getElementById('form-name').value
        const email = document.getElementById('form-email').value
        const subject = document.getElementById('form-subject').value
        const message = document.getElementById('form-message').value
        if (name == '' || email == '' || subject == '' || message == '') {
            alert("Please provide extra info.")
        } else {
            sendEmail(name, email, subject, message)
            document.getElementById('form-name').value = ""
            document.getElementById('form-email').value = ""
            document.getElementById('form-subject').value = ""
            document.getElementById('form-message').value = ""
        }
    }

    function sendEmail(name, email, subject, message) {

        const recipeUrl = 'https://formsubmit.co/ajax/patrickxunuo@hotmail.com';
        const requestMetadata = {
            method: 'POST',
            data: {
                'subject': subject,
                'name': name,
                'email': email,
                'message': message
            }
        };

        fetch(recipeUrl, requestMetadata)
            .then(res => res.json())
            .then(recipes => {
                console.log('ok')
            });
    }



return (
    <form>
        <div className="form-item form-name">
            <label for="form-name">Name</label>
            <input type="text" name="form-name" id="form-name" />
        </div>
        <div className="form-item form-email">
            <label for="form-email">Email</label>
            <input type="email" name="form-email" id="form-email" />
        </div>
        <div className="form-item form-subject">
            <label for="form-subject">Subject</label>
            <input type="text" name="form-subject" id="form-subject" />
        </div>
        <div className="form-item form-message">
            <label for="form-message">Message</label>
            <textarea type="text" name="form-message" id="form-message" />
        </div>
        <div className="form-item form-submit">
            <input tyle="button" id="form-submit" value="Submit" onClick={sendClicked} />
        </div>

    </form>
)
}

export default ContactForm
