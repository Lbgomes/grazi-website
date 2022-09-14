import styled, { css } from 'styled-components'

export const Container = styled.div`
    position: relative;
    text-align: center;
    color: white;
    height: 60vh;
    @media (max-width: 768px) {
      width: 100%;
      height: auto;
      aspect-ratio: 4/3;
    }
`
export const Image = styled.div`
    & > span {
      height: 100% !important;
      @media (max-width: 768px) {
        width: 100% !important;
        aspect-ratio: 4/3;
      }
    }
    & > span > img {
      object-fit: cover;
      object-position: center;
    }
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: self-start;
    position: absolute;
    top: 20%;
    left: 17.5%;
    max-width: 150rem;
    margin: 0 auto !important;
    width: 100%;
    z-index: 10;
    @media (max-width: 768px) {
      top: 5%;
      left: 5%;
    }
`


export const SubTitle = styled.h1`
    font-size: clamp(
      1.2rem,
      4vw,
      1.7rem
    );
    font-weight: 300;
    max-width: 47rem;
    text-align: left;
    color: black;
`
export const Shadow = styled.span`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(231, 213, 210, 0.65);
    opacity: 0.74;
    @media (max-width: 768px) {
      background: linear-gradient(0deg, rgba(16, 16, 16), rgba(0, 0, 0, 0.2)),
        linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.132) 71.73%,
          rgba(0 0 0 / 100%) 96.68%
        ),
        url(.jpg);
    }
`

export const ButtonContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 11%;
`

