import React from 'react'
import {FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrap, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, MainLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterStyles'
import {animateScroll as scroll} from 'react-scroll';
import Logo from '../../svg/logo.svg';


const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
      };

  return (
    <div>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrap>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/#">How it works</FooterLink>
                            <FooterLink to="/#">Testimonials</FooterLink> 
                            <FooterLink to="/#">Careers</FooterLink>
                            <FooterLink to="/#">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/#">Contact</FooterLink>
                            <FooterLink to="/#">Support</FooterLink>
                            <FooterLink to="/#">Destinations</FooterLink>
                            <FooterLink to="/#">Sponsorships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrap>
                    <FooterLinksWrap>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/#">Submit Video</FooterLink>
                            <FooterLink to="/#">Ambassadors</FooterLink>
                            <FooterLink to="/#">Agency</FooterLink>
                            <FooterLink to="/#">Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/#">Instagram</FooterLink>
                            <FooterLink to="/#">Facebook</FooterLink>
                            <FooterLink to="/#">Youtube</FooterLink>
                            <FooterLink to="/#">Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrap>
                </FooterLinksContainer>  
                <SocialMedia>
                    <SocialMediaWrap>
                        <MainLogo to='/' onClick={toggleHome}>
                            <img src={Logo} width="64px" alt="Student Zen Logo" />
                        </MainLogo>
                        <WebsiteRights>
                            Student Zen © {new Date().getFullYear()} All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/#" target="_blank" aria-label="Facebook">
                                <FaFacebookF />
                            </SocialIconLink>
                            <SocialIconLink href="/#" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/#" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/#" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/#" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>

    </div>
  )
}

export default Footer