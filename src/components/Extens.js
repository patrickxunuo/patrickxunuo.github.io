import React from 'react'
import ContactForm from './ContactForm'

export const Extens = (props) => {

    let inside = (<></>)

    switch (props.identifier) {
        case 'intership/1':
            inside = <div style={{ color: 'red' }}>wtf</div>
            break
        case 'intership/2':
            inside = <div style={{ color: 'red' }}>wtf2</div>
            break
        case 'contact':
            inside = <ContactForm />
            break
        default:
            inside = <></>
    }

    return (
        <div>
            {inside}
        </div>
    )
}
export default Extens