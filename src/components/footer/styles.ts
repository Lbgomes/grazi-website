import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  background-color: #f3e2e2;
  width: 100%;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export const Container = styled.div`
    display: flex;
    width: 100%;
`

export const ContentsContainer = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 4.8rem;
    height: 100%;
    max-width: 130rem;
    padding: 3.2rem;
    width: 100%;
    @media screen and (min-width: ${theme.screen.large}) {
      flex-direction: row;
      justify-content: space-between;
    }
  `}
`



export const LogoContent = styled.div`
  ${({ theme }) => css`
    width: 16.4rem;
    @media screen and (min-width: ${theme.screen.large}) {
    }
  `}
`

export const IconContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1.6rem;
    height: 4.4rem;
    justify-content: center;
    width: 100%;
    @media screen and (min-width: ${theme.screen.large}) {
      order: 3;
      width: 16.4rem;
    }
  `}
`

export const ListContent = styled.ul`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    text-align: center;
    width: 100%;
    & li {
      list-style-type: none;
    }
    @media screen and (min-width: ${theme.screen.large}) {
      flex-direction: row;
      gap: 2.6rem;
      justify-content: center;
      width: fit-content;
      & li {
        width: fit-content;
      }
    }
  `}
`
export const RightReserved = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 0.8rem 1.8rem;
    width: fit-content;
    align-items: start;

  `}
`

export const RightContent = styled.span`
  ${({ theme }) => css`
  white-space: nowrap;
  font-size: 1.4rem;
  line-height: 1.5rem;
    text-align: center;
    @media (max-width: 800px) {
      line-height: 2.1rem;
    }
  `}
`