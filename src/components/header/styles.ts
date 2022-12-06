import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 1rem;
  max-width: 150rem;
  margin: 0 auto;
  width: 100%;
  justify-content: space-between;
@media(max-width: 800px){
  display: none;
}
`;
export const LogoContainer = styled.div`
    aspect-ratio:75/38;
    width: 10rem !important;
    span > img {
      width: 10rem !important;

    }
    > span {
    position: static !important;
    width: 10rem !important;

    img{
      width: 10rem !important;
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
  max-width: 150rem;
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
    box-shadow: -12px 0px 26px 5px rgba(0, 0, 0, 0.6);
    background: ${theme.colors.primary};
  `}
`
export const InsideMenu = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    padding-top: ${theme.spacings.xxlarge};
    z-index: ${theme.layers.overlay};

  `}
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
