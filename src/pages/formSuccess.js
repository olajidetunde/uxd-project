import React from 'react'
import styled from 'styled-components'
import { Styles } from '../components/Styles'
import Confirmation from '../components/Confirmation'
import { Contact } from '../components/FormData'

const FormSuccess = () => {

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
        <Confirmation {...Contact}/>
    </Container>
  )
}

export default FormSuccess