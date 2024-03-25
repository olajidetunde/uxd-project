import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { Styles } from '../Styles';


export const FormContainer = styled.div`
    height: 100vh;
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden; 
    background: #fff;
`;   

export const FormWrap = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;

export const FormSide = styled.div`
    height: 100%;
    max-width: 400px;
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 40px;
    /* width: 50%; */
    background: ${Styles.colors.primary2};
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 720px) {
        display: none;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    /* width: 50%; */
    padding: 20px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 480px) {
        padding: 20px;
    }
`;

export const Form = styled.form`
    background: #fff;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    /* padding: 40px 32px; */
    /* border-radius: 8px; */
    /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); */
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #000;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 12px;
    font-size: 14px;
    color: #000;
`;  

export const FormInput = styled.input`
    padding: 12px 16px;
    margin-bottom: 32px;
    border: 1px solid ${Styles.colors.border};
    border-radius: 4px;
`;

export const FormButton = styled.button`
    border-radius: 40px;
  background: ${Styles.colors.primary};
  padding: 12px 24px;
  color: ${Styles.colors.white};
  font-size: 1rem;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: ${Styles.colors.prLight};
    box-shadow: ${Styles.shadows.medium};
    color: ${Styles.colors.prDark2};
  }
`;

export const FormText = styled.span`
    text-align: center;
    margin-top: 24px;
    color: ${Styles.colors.text2};
    font-size: 14px;
    cursor: pointer;

    &:hover {
        color: ${Styles.colors.primary};
        text-decoration: underline;
    }
`;

export const CloseIcon = styled.div`
position: absolute;
top: 24px;
left: 24px;
display: block;
cursor: pointer;
`

export const Img = styled.img`
    width: 100px;
    display: flex;
    margin: 40px auto;
`

export const SideImg = styled.img`
    width: 70%;
    display: flex;
    margin: 30px auto;  

`

export const Header = styled.h3`
    margin-bottom: 10px;
    color: ${Styles.colors.white};
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
`;

export const Title = styled.p`
    font-size: 1rem;
    color: ${Styles.colors.prLight};   
    text-align: center;

`;

