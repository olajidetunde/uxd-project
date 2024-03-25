import React from 'react'
import styled from 'styled-components'
import PlayStore from '../svg/PlayStore.svg'
import AppStore from '../svg/AppStore.svg'


const DownloadContainer = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 2;
    padding: 0;
    align-items: center;
    margin-top: 120px;
    justify-content: center;


    @media screen and (max-width: 640px) {
        flex-direction: column;
    }
`

const ButtonWrap = styled.div`
    display: flex;
    flex-direction: row;

`

const Img = styled.img`
    display: flex;
    height: 2.5rem;
    margin-left: 10px;
    cursor: pointer;
    /* svg { font-size: 10rem}; */


`

const H4 = styled.h4`
    font-size: 1rem;
    /* text-transform: uppercase; */
    font-weight: 400;
    color: #fff;
    margin-right: 10px;
    margin-bottom: 20px;

    @media screen and (max-width: 640px) {
        text-align: center;}
`

const DownloadApp = () => {
  return (
    <>
        <DownloadContainer>
            <H4>Download the app</H4>
            <ButtonWrap>
                < Img src={AppStore} alt="App Store" />
                < Img src={PlayStore} alt="Play Store" />
            </ButtonWrap>
        </DownloadContainer>

    </>
  )
}

export default DownloadApp