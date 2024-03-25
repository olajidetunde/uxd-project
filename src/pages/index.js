import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import Logo from '../components/Logo'
import Discover from '../components/Discover'
import { homeObj1} from '../components/Discover/Data'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Features from '../components/Features'
import Feedback from '../components/Feedback'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <div>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle}/>
    <Hero/>
    <Logo/>
    <Discover {...homeObj1} />
    <Features/>
    <Feedback/>
    <Contact/>
    <Footer/>
    </div>
  ) 
}

export default Home