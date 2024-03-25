import React from 'react'
import { LogoContainer, LogoWrap, LogoWrap1, LogoWrap2, LogoImg, H4 } from './LogoStyles';
import logo1 from '../../svg/Schools/BCU.svg';
import logo2 from '../../svg/Schools/EUSA.svg';
import logo3 from '../../svg/Schools/BU.svg';
import logo4 from '../../svg/Schools/GCU.svg';
import logo5 from '../../svg/Schools/KCL.svg';
import logo6 from '../../svg/Schools/SHU.svg';
import logo7 from '../../svg/Schools/LIPA.svg';
import logo8 from '../../svg/Schools/SU.svg';
import logo9 from '../../svg/Schools/UEL.svg';
import logo10 from '../../svg/Schools/US.svg';

const Logo = () => {
  return (
    <>
        <LogoContainer>
            <H4>Our Partners</H4>
            <LogoWrap>
              <LogoWrap1>
                <LogoImg src={logo1} alt="" ></LogoImg>
                <LogoImg src={logo2} alt="" ></LogoImg>
                <LogoImg src={logo3} alt="" ></LogoImg>
                <LogoImg src={logo4} alt="" ></LogoImg>
                <LogoImg src={logo5} alt="" ></LogoImg>
                <LogoImg src={logo6} alt="" ></LogoImg>
                <LogoImg src={logo7} alt="" ></LogoImg>
                <LogoImg src={logo8} alt="" ></LogoImg>
                <LogoImg src={logo9} alt="" ></LogoImg>
                <LogoImg src={logo10} alt="" ></LogoImg>
              </LogoWrap1>
              <LogoWrap2>
                <LogoImg src={logo1} alt="" ></LogoImg>
                <LogoImg src={logo2} alt="" ></LogoImg>
                <LogoImg src={logo3} alt="" ></LogoImg>
                <LogoImg src={logo4} alt="" ></LogoImg>
                <LogoImg src={logo5} alt="" ></LogoImg>
                <LogoImg src={logo6} alt="" ></LogoImg>
                <LogoImg src={logo7} alt="" ></LogoImg>
                <LogoImg src={logo8} alt="" ></LogoImg>
                <LogoImg src={logo9} alt="" ></LogoImg>
                <LogoImg src={logo10} alt="" ></LogoImg>
              </LogoWrap2>
            </LogoWrap>
        </LogoContainer>

    </>
  )
}

export default Logo