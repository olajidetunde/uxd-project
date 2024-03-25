import React from 'react'
import styled from 'styled-components'
import { Styles } from '../components/Styles'
import Confirmation from '../components/Confirmation'
import { Signup } from '../components/FormData'

const SignupSuccess = () => {

    const Container = styled.div`
        background: ${Styles.colors.white};
        height: 100vh;
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    `
    

  return (
    <Container>
        <Confirmation {...Signup}/>
    </Container>
  )
}

export default SignupSuccess