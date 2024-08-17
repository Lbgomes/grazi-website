import styled from "styled-components";


export const Container = styled.a`
    width: fit-content;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #8A4F58;
    text-decoration: none;
    background: white;
    cursor: pointer;
    font-size: 1.5rem;
    gap: 1rem;
    margin-top: 1rem;
    font-weight: 500;
    height: 5rem;
    transition: 0.3s;
    color: white;
    background-color: #cf7171;
    line-height: 1;
    :hover{
        scale: 1.01;
        box-shadow: -1px 4px 11px -1px rgba(0,0,0,0.64);
    }
`;