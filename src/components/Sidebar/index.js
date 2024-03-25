import React from 'react'
import {Icon,
        SidebarContainer,
        CloseIcon,
        SidebarWrapper,
        SidebarMenu,
        SideBtnWrap,
        SidebarLink,
        SidebarRoute
    } from './SidebarStyles'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                <SidebarLink to='features' onClick={toggle}>Features</SidebarLink>
                <SidebarLink to='feedback' onClick={toggle}>Feedback</SidebarLink>
                <SidebarLink to='contact' onClick={toggle}>Contact Us</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signup'>Sign Up</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>

    </SidebarContainer>
  )
}

export default Sidebar