import React from 'react';
import ContactImg from '../../svg/Contact.svg';
import { useNavigate } from 'react-router-dom';

import { ContactContainer, ContactWrap, Column1, Column2, Heading, Subheading, Form, FormButton, Label, Input, Textarea, Img } from './ContactStyles';

const Contact = () => {
  

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/formSuccess');
    event.target.reset();
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert('Thank you for your message! We will get back to you as soon as possible.');
  //   e.target.reset();
  // }

  return (
    <>
      <ContactContainer id='contact'>
        <ContactWrap>
          <Column1>
            <Img src={ContactImg} />
            <Heading>Contact us</Heading>
            <Subheading>We're here to help with any questions or concerns you may have. Please fill out this form and we'll get back to you as soon as possible.</Subheading>
          </Column1>
          <Column2>
            <Form onSubmit={handleSubmit}>
              <Label htmlFor="fname"> First name: </Label>
              <Input required type="text" id="fname" name="fname" />

              <Label htmlFor="lname"> Last name: </Label>
              <Input required type="text" id="lname" name="lname" />

              <Label htmlFor="email"> Email: </Label>
              <Input required type="text" id="email" name="email" />

              <Label htmlFor="message"> Message: </Label>
              <Textarea required id="message" name="message"></Textarea>

              <FormButton type="submit">Submit</FormButton>
            </Form>

          </Column2>
        </ContactWrap>
      </ContactContainer>
    </>
  )
}

export default Contact