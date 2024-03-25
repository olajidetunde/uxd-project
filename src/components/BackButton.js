import React from 'react';
import {useNavigate} from 'react-router-dom';
import {FiX} from 'react-icons/fi';
import styled from 'styled-components';
import {Styles} from './Styles';

const ButtonContainer = styled.div`
    padding:10px;
    margin: 0;
    border-radius: 24px;
    color: ${Styles.colors.white};
    position: absolute;
    justify-content: center;
    align-items: center;

    top: 12px;
    left: 12px;
    border: none;
    z-index: 1;
    cursor: pointer;
    svg {font-size: 1.5rem; }

    &:hover {
        background-color: ${Styles.colors.prDark};
        transition: 0.3s ease-out;
    }
`

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <ButtonContainer onClick={() => { navigate(-1); }}>
      <FiX className='closeIcon'/>
    </ButtonContainer>
  );
}

export default BackButton;
