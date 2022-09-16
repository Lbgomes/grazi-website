import styled, { css } from 'styled-components'

type DropdownListProps = {
  position: 'left' | 'right'
}
export const Arrow = styled.div<DropdownListProps>`
  ${({ position }) => css`
    display: flex;
    position: absolute;
    bottom: 0;
    border: none;
    left: ${position === 'left' ? '0' : 'auto'};
    right: ${position === 'right' ? '0' : 'auto'};
    z-index: 1;
    cursor: pointer;
    
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