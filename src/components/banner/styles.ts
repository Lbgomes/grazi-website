import styled, { css } from 'styled-components'

export const Container = styled.div`
${({ theme }) => css`
  background-color: ${theme.colors.banner};
  color: white;
  justify-content: center;
  height: 53vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 10;
  overflow: hidden;

  `}
`
export const Title = styled.h1`
  color: #521414;
  max-width: 100rem;
  text-align: center;
  margin: 0 auto;
  font-size: clamp(
    3rem,
    4vw,
    5.4rem
  );
font-family: "Bitter", serif;
font-weight: 400;
  text-transform: uppercase;

  @media(max-width: 800px){
    width: 90%;
}
`

// Your existing styled component
export const Image = styled.div`
  width: 200px !important;
  height: 120px !important;
  
  span, img {
    position: unset !important;
    width: 100% !important;
    height: 100% !important;
  }
  
  & > span > img {
    object-fit: contain;
    object-position: center;
    width: 100% !important;
    height: 100% !important;
  }
`;


export const SubTitle = styled.h1`
    font-size: clamp(
      1.2rem,
      4vw,
      1.4rem
    );
    font-weight: 300;
    text-align: left;
    color: black;
    @media(max-width: 800px){
    width: 90%;
}
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

