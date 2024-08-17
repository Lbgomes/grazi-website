import styled, { css } from "styled-components";


export const Container = styled.a`
    ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-decoration: none;
    background: ${theme.colors.button};
    cursor: pointer;
    padding: 1rem 1.25rem;
    font-size: 12px;
    letter-spacing: 1.5px;
    font-weight: 600;
    height: 44px;
    text-transform: uppercase;
    transition: 0.3s;
    line-height: 1;

    `}
`;