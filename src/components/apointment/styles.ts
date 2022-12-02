import styled from "styled-components";


export const Container = styled.div`
    background-color: #8A4F58;
    height: 16rem;
    color: white;
    font-weight: 700;
    font-size: 30px;
    display: flex;
    place-content: center;
    @media(max-width: 650px){
        height: auto;
    }
`

export const Content = styled.div`
    max-width: 1000px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 1100px){
    max-width: 90%;
    }
    @media(max-width: 650px){
        margin: 2rem 0;
        justify-content: center;
        gap: 2rem;
        flex-direction: column;
    }
`