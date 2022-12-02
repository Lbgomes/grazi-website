import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 1rem;
  max-width: 150rem;
  margin: 0 auto;
  width: 100%;
  justify-content: space-between;
@media(max-width: 800px){
  display: none;
}
`;
export const LogoContainer = styled.div`
    aspect-ratio:75/38;
    width: 10rem !important;
    span > img {
      width: 10rem !important;

    }
    > span {
    position: static !important;
    width: 10rem !important;

    img{
      width: 10rem !important;
    }

    }
  > span > img {
    height: auto !important;
    position: static !important;
    min-width: auto !important;
    min-height: auto !important;
    margin: 0 !important;
  }
`;
export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem
`;