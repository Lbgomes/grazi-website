import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  padding: 10rem 0;
  background-color: #f8f8f8;
  width: 100%;
  justify-content: center;

  @media(max-width: 800px){
    flex-direction: column;
    align-items: center;
  height: auto;

  }
`;

export const ImageContainer = styled.div`

span, img {
  position: unset !important;
  width: 40rem !important;
  height: 45rem !important;
  border-radius: 10px;
  object-fit: contain;
  @media(max-width: 500px){
    width: 80vw !important;
  }
}
`
export const TextContainer = styled.div`
text-align: left;
display: flex;
flex-direction: column;
gap: 1rem;
max-width: 60rem;
@media(max-width: 500px){
    width: 80vw;
  }
`

export const Title = styled.div`
text-align: left;
font-size: 14px;
display: flex;
flex-direction: column;
.space{
  margin: 0.5rem 0;
  font-weight: 900;
}
`
export const Text = styled.div`
line-height: 1.6;
font-size: 1.4rem;
text-align: left;
color: #0a0a0a;
`