import styled, { css } from 'styled-components'

type DropdownListProps = {
  position: 'left' | 'right'
}
export const Arrow = styled.div<DropdownListProps>`
  ${({ position }) => css`
    display: flex;
    position: absolute;
    bottom: 50% !important;
    border: none;
    left: ${position === 'left' ? '247px' : 'auto'};
    right: ${position === 'right' ? '250px' : 'auto'};
    z-index: 1;
    cursor: pointer;
    @media(max-width: 1500px){
      left: ${position === 'left' ? '15%' : 'auto'};
    right: ${position === 'right' ? '15%' : 'auto'};
    }
    @media(max-width: 1300px){
      left: ${position === 'left' ? '6%' : 'auto'};
    right: ${position === 'right' ? '6%' : 'auto'};
    }
    @media(max-width: 1000px){
      left: ${position === 'left' ? '5%' : 'auto'};
    right: ${position === 'right' ? '5%' : 'auto'};
    }
    @media(max-width: 700px){
        display: none !important;
      }
    & button {
        background-color: #8A4F58;
        border: none;
        width: 4rem;
        height: 4rem;
        cursor: pointer;
        border-radius: 100%;
        transform: rotate(180deg);
    }
  `}
`