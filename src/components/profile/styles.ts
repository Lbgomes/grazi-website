import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1000px;
  margin: 7rem auto;
  width: 100%;
  justify-content: space-between;
  align-items: self-start;
  @media(max-width: 1100px){
    width: 90%;
  }
  @media(max-width: 800px){
    flex-direction: column;
    align-items: center;
    width: 80vw;
  height: auto;

  }
`;

export const ImageContainer = styled.div`
text-align: left;

span, img {
  aspect-ratio: 1/1;
  position: static !important;
  width: 40rem !important;
  border-radius: 10px;
  @media(max-width: 500px){
    width: 80vw !important;
    height: 80vw !important;
  }
}
`
export const TextContainer = styled.div`
text-align: left;
`

export const Title = styled.div`
text-align: left;
color: #8A4F58;
font-weight: 700;
font-size: 22px;
`
export const Text = styled.div`
margin-top: 2rem;
line-height: 1.6;
font-size: 1.7rem;
text-align: left;
color: #0a0a0a;
`