import styled from "styled-components";
import { Styles } from "../Styles";

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 32px;
    height: 100vh;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100% ),
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
        z-index: 2;
    }

    @media screen and (max-width: 768px) {
        height: 80vh;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0; 
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    z-index: 2;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px; 
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 56px;
    font-weight: 700;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
        br { display: none;}
    }   

    @media screen and (max-width: 480px) {
        font-size: 32px;
        br { display: none;}
    }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    text-align: center;
    /* max-width: 600px; */

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }   

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`;

export const Span = styled.span`
    color: ${Styles.colors.secondary};
`


