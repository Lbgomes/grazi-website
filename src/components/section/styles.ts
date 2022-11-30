import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 95rem;
`

type TitleContainerProps = {
    isOpen: boolean
}


export const TitleContainer = styled.div<TitleContainerProps>`
    ${({ isOpen }) => css`
        user-select: none;
        padding: 16px;
        transition: 0.3s;
        display: flex;
        border-radius: 4px 4px 0 0;
        align-items: center;
        background: ${isOpen ? '#4d4d4d' : 'white'}; ;
        color: ${isOpen ? 'white' : '#4d4d4d'}; ;
        cursor: pointer;
        height: 50px;
    `}
`

export const TextContainer = styled.div`
    background: white;
    padding: 3rem;
    font-size: 17px;
    color: #333333;
    border-radius: 0 0 4px 4px;
`