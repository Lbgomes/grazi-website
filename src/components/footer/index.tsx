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
              alt="logo escrito Grazi gomes"
              layout="responsive"
              objectFit="cover"
            />
          </S.LogoContent>
        </S.ContentsContainer>
      </S.Container>

      <S.RightReserved>
        <S.RightContent>
          Graziela B. Gomes
        </S.RightContent>
        <S.RightContent>
          <strong>CRP:</strong> 183637-6 | São Paulo
        </S.RightContent>
        <S.RightContent>
          <strong> BPS UK: </strong>687171
        </S.RightContent>
      </S.RightReserved>
    </S.Wrapper>
  )
}