import React from 'react'
import ContactForm from './ContactForm'

export const Extens = (props) => {

    let inside = (<></>)

    switch (props.identifier) {
        case 'intership':
            inside =
                <ul className="intern-des">
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
                </ul>
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
        <>
            {inside}
        </>
    )
}
export default Extens