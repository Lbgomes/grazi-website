import styled from "styled-components";


export const Container = styled.a`
width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #8A4F58;
    text-decoration: none;
    background: white;
    cursor: pointer;
    border-radius: 0.6rem;
    font-size: 2rem;
    font-weight: 500;
    height: 5rem;
    transition: 0.3s;
    line-height: 1;
    :hover{
        scale: 1.01;
        box-shadow: -1px 4px 11px -1px rgba(0,0,0,0.64);
    }
`;