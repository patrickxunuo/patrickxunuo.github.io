import React, {useEffect} from 'react'
import FormItem from './FormItem'
import AOS from 'aos'
import "aos/dist/aos.css"

const ContactForm = () => {
    useEffect (() => {
        AOS.init({})
      },[])

    return (
        <form>
                <div style={{color:'red'}}>asdsad</div>
        </form>
    )
}

export default ContactForm
