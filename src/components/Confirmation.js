import React from 'react'
import styled from 'styled-components'
import { Styles } from './Styles'
import { Button } from './ButtonStyles'
import { FiCheck } from 'react-icons/fi'

const Container = styled.div`
    background: ${Styles.colors.white};
    width: 400px;
    height: 400px;
    border-radius: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    padding: 32px;
    color: ${Styles.colors.text2};
    border: solid 1px ${Styles.colors.border};
    display: flex;
    flex-direction: column;
    background-color: ${Styles.colors.white};

    @media screen and (max-width: 480px) {
        width: 80%;
        padding: 16px;
    }

`

const IconWrap = styled.div`
    font-size: 4rem;
    background-color: #00d400;
    color: ${Styles.colors.white};
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px auto;
`

const H1 = styled.h1`
    font-size: 1.5rem;
    margin: 16px 0;
`

const P = styled.p`
    font-size: 1rem;
    margin-bottom: 40px;
`





const Confirmation = ({title, subtitle}) => {
  return (
    <Container>
        <IconWrap>
            <FiCheck />
        </IconWrap>

        <H1>{title}</H1>
        <P>{subtitle}</P>
        <Button to='/'>Return Home</Button>

    </Container>
  )
}

export default Confirmation