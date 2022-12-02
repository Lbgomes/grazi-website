import styled, { css } from 'styled-components'

export const Container = styled.div`
    position: relative;
    text-align: center;
    color: white;
    height: 60vh;
    background-image: url( '/images/wavesNegative.svg');
    z-index: -10;
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
    margin: 0 auto !important;
    z-index: 10;
    @media (max-width: 768px) {
    width: auto;
      top: 10%;
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

`

export const ButtonContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 11%;
`
export const ImageContainer = styled.div`
    margin-top: -49px;
    z-index: 123123;
    span{
      position: unset !important;
      max-height: 50px;
    height: 100%;
    img{
      position: unset !important;
      height: 50px !important;
    }
    }
`

