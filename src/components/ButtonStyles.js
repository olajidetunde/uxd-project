import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Styles} from './Styles';

export const Button = styled(Link)`
border-radius: 40px;
background: ${Styles.colors.primary};
padding: 12px 24px;
color: ${Styles.colors.white};
text-decoration: none;
font-size: 1rem;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;

&:hover {
    transition: all 0.2s ease-in-out;
    background: ${Styles.colors.prLight};
    color: ${Styles.colors.prDark2};
    box-shadow: ${Styles.shadows.large};

    }

`;

