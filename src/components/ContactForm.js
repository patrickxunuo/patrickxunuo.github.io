import React, {useEffect} from 'react'
import FormItem from './FormItem'
import AOS from 'aos'
import "aos/dist/aos.css"

const ContactForm = () => {
    useEffect (() => {
        AOS.init({})
      },[])

      
    return (
        <form data-aos="fade-down">
                <FormItem />
        </form>
    )
}

export default ContactForm
