import Image from 'next/image'
import Logo from '../../../public/images/TipografiaEscura.png'
import * as S from './styles'

export default function Footer() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ContentsContainer>
          <S.LogoContent>
            <Image
              data-testid="logo"
              src={Logo}
              layout="responsive"
              objectFit="cover"
            />
          </S.LogoContent>
        </S.ContentsContainer>
      </S.Container>

      <S.RightReserved>
        <S.RightContent>
          © Plataforma 2022 Murilo Gomes. Todos os direitos reservados
        </S.RightContent>
        <S.RightContent>
          Graziela Barbosa Gomes CRP: 123456
        </S.RightContent>
      </S.RightReserved>
    </S.Wrapper>
  )
}