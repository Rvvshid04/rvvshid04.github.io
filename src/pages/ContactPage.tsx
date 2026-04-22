import { useEffect } from 'react'
import Contact from "../components/Contact"

const ContactPage = () => {
    useEffect(() => {
        document.title = "Contact | Raashid Arquil"
    }, [])

    return(
        <div className="mt-10">  
            <Contact/>
        </div>
    )
}

export default ContactPage