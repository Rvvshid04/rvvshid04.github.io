import { useEffect } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import FeaturedProjects from '../components/FeaturedProjects'
import Skills from '../components/Skills'


const Home = () => {
    useEffect(() => {
        document.title = "Raashid Arquil"
    }, [])

    return(
        <>
         <Hero />
         <About />
         <FeaturedProjects />
         <Skills />
        </>
    )
}

export default Home