import styled from "styled-components";


export const Wrapper = styled.div`

background-color: #f8f8f8;
border-top: 1px solid #ddd;
`

export const Container = styled.div`
    display: flex;
    gap: 5rem;
    max-width: 165rem;
    margin: 0 auto;
    padding: 10rem 0;
    justify-content: center;
    place-content: center;
    @media(max-width: 800px){
        flex-direction: column;
    }

`
export const TitleContainer = styled.div`
    max-width: 125rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media(max-width: 800px){
        
        max-width: 90%;
        align-self: center;
    }
`
export const Title = styled.h2`
    width: 100%;
    font-size: 3.8rem;
    font-weight: 600;
    font-family: "clash";
    font-weight: 500;
    text-align: center;
`
export const Border = styled.div`
    width: 100%;
    height: 1px;
    margin: 1rem 0;
    background-color: #ddd;
`
export const Text = styled.p`
    width: 100%;
    color: #333;
    font-size: 1.4rem;
    line-height: 2rem;
`