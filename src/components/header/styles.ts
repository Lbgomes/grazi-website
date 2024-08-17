import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
  display: flex;
  padding: 2.4rem;
  font-family: Arial, sans-serif;
  background-color: ${theme.colors.banner};
  align-items: center;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 10;
@media(max-width: 800px){
  display: none;
}

  `}
`;
export const LogoContainer = styled.div`
    aspect-ratio:75/38;
    width: 8rem !important;
    align-content: center;
    span > img {
      width: 8rem !important;

    }
    > span {
    position: static !important;
    width: 8rem !important;

    img{
      width: 8rem !important;
    }

    }
  > span > img {
    height: auto !important;
    position: static !important;
    min-width: auto !important;
    min-height: auto !important;
    margin: 0 !important;
  }
`;
export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
`;

export const web = styled.div`
  display: flex;
  max-width: 180rem;
  width: 100%;

justify-content: space-between;
@media(nax-width: 800px){
  display: none;
}
`;


export const Mobile = styled.div`
  ${({ theme }) => css`

    @media (min-width: ${theme.screen.large}) {
      display: none;
    }
  `}
`
export const Hamburguer = styled.svg`
  width: 3rem;
  height: 3rem;
  align-self: center;
`
export const MenuHamburguer = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    width: 60%;
    z-index: ${theme.layers.overlay};
    box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.6);
    background: ${theme.colors.primary};
  `}
`
export const InsideMenu = styled.div`
  ${({ theme }) => css`
  width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: ${theme.spacings.xxlarge};

  `}
`

export const ButtonContainer = styled.div`
width: 90%;
align-self: center;
  margin-top: 2rem;
`
export const LinkItem = styled.div`
  ${({ theme }) => css`
  font-size: ${theme.font.sizes.large};
  cursor: pointer;
  padding-left: 2rem;
    color: ${theme.colors.white};
    text-align: start;
  `}
`
export const HamburguerIcon = styled.button`
  background-color: transparent;
  z-index: 101;
  position: fixed;
  top: 0px;
  right: 0px;
  outline: 0;
  border: none;
  user-select: none;
  top: 2.2rem;
  right: 1.5rem;
  width: 3rem;
  height: 3rem;
`
export const DropdownMenu = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
  `}
`

export const MenuTitle = styled.h1``

export const item = styled.div`
  ${({ theme }) => css`
    padding-left: 2rem;
    color: ${theme.colors.white};
    text-align: start;
  `}
`
