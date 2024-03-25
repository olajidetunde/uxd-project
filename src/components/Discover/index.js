import React from 'react';
import { Button } from '../ButtonStyles';

import { DContainer, DWrap, DRow, DColumn1, DColumn2, DTextWrap, 
        Topline, Heading, Subheading, BtnWrap, ImgWrap, Img } from './DiscoverStyles';

const Discover = ({lightBg, id, imgStart, topLine, heading, subheading, lightText, darkText, buttonLabel, img, alt, primary, dark, dark2 }) => {
  return (
    <>
        <DContainer lightBg={lightBg} id={id}>
            <DWrap>
                <DRow imgStart={imgStart}>
                    <DColumn1>
                         <DTextWrap>
                            <Topline>{topLine}</Topline>
                            <Heading lightText={lightText}>{heading}</Heading>
                            <Subheading darkText={darkText}>{subheading}</Subheading>
                            <BtnWrap>
                                <Button 
                                to="/signup"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}

                                >
                                {buttonLabel}
                                </Button>
                            </BtnWrap>
                        </DTextWrap>
                    </DColumn1>
                    <DColumn2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </DColumn2>
                </DRow>
            </DWrap>

        </DContainer>
    </>
  )
}

export default Discover