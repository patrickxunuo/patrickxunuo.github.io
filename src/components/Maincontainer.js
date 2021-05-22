import React from 'react'
import ContactForm from './ContactForm.js'
import Ablock from './Ablock.js'
import Title from './Title.js'

export const Maincontainer = () => {
    const items = [
        {
            'content': 'home',
            'location': 'Vancouer',
            'time': 'now',
            'what': `Creative web developer, 
            love to learn, and build.`
        },
        {
            'content': 'experience',
            'location': 'Beijing',
            'time': 'now',
            'what': `Creative web developer, 
            love to learn, and build.`
        }
    ]

    return (
        <div className="main-container">
            {items.map((item) => (
                <Title item={item} />
            ))}
            <ContactForm />
            <Ablock />
        </div>
    )
}

export default Maincontainer
