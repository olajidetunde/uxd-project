import styled from "styled-components";
import { Styles } from "../Styles";

export const ContactContainer = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    /* height: 860px; */
    max-width: 1100px;
    width: 100%;
    z-index: 1;
    margin: 0 auto;
    padding:  100px 20px;
    justify-content: center;
    align-items: center;
    

    @media screen and (max-width: 640px) {
        padding: 20px;    }
`

export const ContactWrap = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 640px) {
        flex-direction: column;
    }
`;

export const Column1 = styled.div`
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 20px;

    @media screen and (max-width: 640px) {
        padding: 24px;
        justify-content: center;
        align-items: center;
    }
`

export const Column2 = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 20px;

    @media screen and (max-width: 640px) {
        padding: 24px;
    }
`

export const Img = styled.img`
display: flex;
    width: 80%;
    margin-bottom:32px;

`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 32px;
    line-height: 1.1;
    font-weight: 600;
    color: '#010606';

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subheading = styled.p`
    max-width: 440px;
    /* margin-bottom: 32px; */
    font-size: 1rem;
    line-height: 24px;
    color: ${Styles.colors.text2};
`

export const Form = styled.form`
    background: #fff;
    width: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    /* padding: 32px; */

    @media screen and (max-width: 640px) {
        /* padding: 32px; */
        width: 100%;
        flex: 1;
    }

`

export const Label = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: ${Styles.colors.text};
`

export const Input = styled.input`
    width: 100%;
    padding: 12px 12px;
    margin-bottom: 8px;
    border: 1px solid ${Styles.colors.border};
    border-radius: 4px;
    box-sizing: border-box;
`

export const Textarea = styled.textarea`
    width: 100%;
    padding: 8px 12px;
    margin-bottom: 32px;
    border: 1px solid ${Styles.colors.border};
    border-radius: 4px;
    box-sizing: border-box;
`

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



