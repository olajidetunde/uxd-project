import React from 'react'
import styled from 'styled-components'
import {Styles} from '../Styles'

const CardContainer = styled.div`
    margin: 20px;
    background-color: #ffffff;
    border-radius: 20px;
    padding: 32px 40px;
    text-align: center;
    color: ${Styles.colors.text};
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;

    &:hover {
        box-shadow: 0 10px 20px ${Styles.colors.primary};
        background-color: ${Styles.colors.prLight};
        /* border: solid 2px ${Styles.colors.primary}; */
        transition: 0.4s ease-out ;
        transform: scale(1.05) translateY(-8px);


    }
`

const IconWrap = styled.div`
    padding: 12px;
    border-radius: 50%;
    margin-bottom: 16px;
    background-color: ${Styles.colors.primary};
    justify-content: center;
    align-items: center;
    display: flex;

    &:hover {
        background-color: ${Styles.colors.prDark};
        transition: 0.4s ease-out ;
    }

    

`

const Title = styled.h3`
    font-size: 1.25rem;
    /* color: ${Styles.colors.text}; */
    margin-bottom: 10px;
`
 
const Description = styled.p`
    font-size: 1rem;
    color: #505c5f;
`
const Img = styled.img`
    width: 32px;
    color: #fff;
`



const FeaturesCard = ({heading, subheading, id, icon}) => {
  return (
    <>
    <CardContainer id={id}>
        <IconWrap>
            <Img src={icon} />
        </IconWrap>
        <Title>{heading}</Title>
        <Description>{subheading}</Description>
    </CardContainer>
    </>
  )
}

export default FeaturesCard