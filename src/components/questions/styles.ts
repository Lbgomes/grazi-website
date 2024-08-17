import styled from "styled-components";

export const Container = styled.div`
  max-width: 160rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 10rem 0;
  gap: 4rem;

  @media(max-width: 800px){
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 3.8rem;
  max-width: 16rem;
  text-align: center;

  @media(max-width: 800px){
  font-size: 2.8rem;
  max-width: 100%;
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 130rem;
  @media(max-width: 800px){
  max-width: 80%;
  }
`

export const Item = styled.li`
  display: flex;
  align-items: start;
  gap: 1.6rem;
  font-size: 1.4rem;

`

export const Text = styled.p`
  font-size: 1.4rem;
`