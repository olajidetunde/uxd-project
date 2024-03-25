import React from 'react'
import {FormContainer, FormWrap, FormSide, 
  FormContent, Form, FormH1, FormLabel, FormInput, FormButton, FormText, CloseIcon, Img, SideImg, Header, Title} from './SignupStyles'
import BackButton from '../BackButton'
import Logo from '../../svg/logo.svg';
import Image from '../../svg/svg1.svg';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/signupSuccess');
  };

  return (
    <>
      <FormContainer>
        <CloseIcon >
          <BackButton/>
        </CloseIcon>
        <FormWrap>
          <FormSide>
            <SideImg src={Image}/>
            <Header>Welcome to  Studen Zen</Header>
            <Title>Take on fun and rewarding challenges and connect with the community</Title>


          </FormSide>  
          <FormContent>
          <Img src={Logo} width="80px" alt="Student Zen Logo" />

            <Form onSubmit={handleSubmit}>

              <FormH1>Create a new Student Zen account</FormH1>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <FormInput type="email" required/>
              <FormLabel htmlFor='password'>Password</FormLabel>
              <FormInput type="password" required/>
              <FormButton type="submit">Sign Up</FormButton>
              <FormText>Forgot password</FormText>
            </Form>
          </FormContent>           
        </FormWrap>
      </FormContainer>
    </>
  )
}

export default SignUp




