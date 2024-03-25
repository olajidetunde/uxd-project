import styled, { keyframes } from 'styled-components';

export const LogoContainer = styled.div`
  padding: 24px;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  display: block;
  overflow-x: hidden;

  @media  (max-width: 768px) {
    overflow-x: hidden;
  }
`

const move = keyframes`
  0% { left: 0; }
  100% { left: -100%; }
`

export const LogoWrap = styled.div`
  width: 200%;
  display: flex;
  position: absolute;
  margin-top: 40px;
  animation: ${move} 10s linear infinite;
  transform: translate(0, -50%);
  align-items: center;

  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: 768px) {
    width: 300%;
    margin-top: 20px;
    padding: 0;
  }
`

export const LogoWrap1 = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    width: 150%;
    justify-content: center;
    margin-bottom: 20px;
  }
`

export const LogoWrap2 = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    width: 150%;
    justify-content: center;
    margin-bottom: 20px;
  }
`

export const LogoImg = styled.img`
  height: 45px;
`

export const H4 = styled.h4`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 32px;
`
