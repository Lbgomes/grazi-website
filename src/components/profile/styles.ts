import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 90rem;
  margin: 8rem auto;
  width: 100%;
  justify-content: space-between;
  height: 40rem;
  align-items: self-start;

`;

export const ImageContainer = styled.div`
text-align: left;

span, img {
  aspect-ratio: 1/1;
  position: static !important;
  width: 40rem !important;
  border-radius: 10px;

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