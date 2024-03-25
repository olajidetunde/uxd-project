import React, {useEffect, useState} from 'react'
import {FiMenu, } from 'react-icons/fi';
import {Nav, NavLogo, NavContainer, MobileIcon, NavMenu, NavItem, NavLink, NavBtn, NavBtnLink} from './NavStyles';
import {animateScroll as scroll} from 'react-scroll';
import Logo from '../../svg/logo.svg';


function Navbar({toggle}) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavContainer>
                <NavLogo to='/' onClick={toggleHome}><img src={Logo} width="80px" alt="Student Zen Logo" /></NavLogo>
                <MobileIcon onClick={toggle}>
                  <FiMenu/>
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLink to='about' smooth={true} duration={480} spy={true} exact='true' offset={-80}>About</NavLink>
                  </NavItem>  
                  <NavItem>
                    <NavLink to='features' smooth={true} duration={480} spy={true} exact='true' offset={-80.}>Features</NavLink>
                  </NavItem>  
                  <NavItem>
                    <NavLink to='feedback' smooth={true} duration={480} spy={true} exact='true' offset={-80}>Feedback</NavLink>
                  </NavItem>  
                  <NavItem>
                    <NavLink to='contact' smooth={true} duration={480} spy={true} exact='true' offset={-80}>Contact Us</NavLink>
                  </NavItem>  
                </NavMenu>
                <NavBtn>
                  <NavBtnLink to='/signup'>Get Started</NavBtnLink>
                </NavBtn>
            </NavContainer>
        </Nav>
    </>
  )

}

export default Navbar