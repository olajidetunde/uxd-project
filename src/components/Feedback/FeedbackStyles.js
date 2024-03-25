import styled from "styled-components"
import {Styles} from '../Styles'

export const FeedbackContainer = styled.div`
    width: 90vw;
    height: 400px;
    max-width: 1200px;
    padding: 24px 0;
    margin: 24px auto;
    /* overflow: hidden; */
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 920px) {
        width: 95vw;
    }
`

export const SlideWrap = styled.div`
    margin: 0 auto;
    margin-top: 4rem;
    width: 80vw;
    height: 400px;
    max-width: 800px;
    text-align: center;
    position: relative;
    display: flex;
    /* overflow: hidden; */
`

export const Slider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s linear;

    &.activeSlide {
        opacity: 1;
        transform: translateX(0);
    }

    &.lastSlide {
        transform: translateX(-100%);
    }

    &.nextSlide {
        transform: translateX(100%);
    }   
`

export const LeftArrow = styled.div`
    position: absolute;
    top: 200px;
    left: 0;
    transform: translateY(-50%);
    background: #000;
    color: #fff;
    width: 1.25rem;
    height: 1.25rem;
    display: grid;
    place-items: center;
    svg {font-size: 1rem;}
    border-radius: 24px;
    cursor: pointer;
    transition: all 0.3s linear;

    &:hover {
        background-color: #fff;
        color: #000;
        transition: 0.3s ease-out;
    }

    @media screen and (max-width: 800px) {
        width: 2rem;
        height: 2rem;
        svg {font-size: 1.5rem;}
    }
`

    export const RightArrow = styled.div`
    position: absolute;
    top: 200px;
    right: 0;
    transform: translateY(-50%);
    background: #000;
    color: #fff;
    width: 1.25rem;
    height: 1.25rem;
    display: grid;
    place-items: center;
    svg {font-size: 1rem;}
    border-radius: 24px;
    cursor: pointer;
    transition: all 0.3s linear;

    &:hover {
        background-color: #fff;
        color: #000;
        transition: 0.3s ease-out;
    }

    @media screen and (max-width: 800px) {
        width: 2rem;
        height: 2rem;
        svg {font-size: 1.5rem;}
    }
`

export const Slide = styled.div`
    width: 100%;
    height: 100%;
    background-color: red;
    border-radius: 10px;
    background-size: cover;
    background-position: center;
    margin-bottom: 32px;
`


export const Header = styled.h2`
    font-size: 2rem;
    margin-bottom: 32px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Img = styled.img`
    border-radius: 50%;
    margin-bottom: 1rem;
    background-color: red;
    width: 150px;
    height: 150px;
    /* object-fit: cover; */
    /* box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); */
`
    
export const Name = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: ${Styles.colors.primary};
    text-align: center;
`

export const School = styled.p`
    font-size: 1rem;
    font-style: italic;
    margin-bottom: 2rem;
    color: ${Styles.colors.text};
    text-align: center;
`

export const Quote = styled.p`
    font-size: 1.2rem;
    line-height: 1.5;
    color: ${Styles.colors.text2};
    text-align: center;

    @media screen and (max-width: 800px) {
        max-width: 45rem;
    }
`






