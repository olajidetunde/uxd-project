import styled from 'styled-components';
import {Styles} from '../Styles';

export const FeaturesContainer = styled.div`
    background-color: ${Styles.colors.prDark2};
    padding: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 640px) {
        padding: 20px;
    }
`;

export const FeaturesWrap = styled.div`
    max-width: 1200px;
    margin:  auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const FeaturesRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0;

    @media screen and (max-width: 640px) {
        flex-direction: column;
    }
`;

export const H2 = styled.h2`
    font-size: 2.5rem;
    color: #fff;
    margin-top: 32px;
    margin-bottom: 64px;
    `
