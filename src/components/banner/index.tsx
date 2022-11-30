import Title from '../Title'
import Image from 'next/image'
import * as S from './styles'
import Button from '../button'
import Waves from '../../../public/images/wavesNegative.svg'
export default function Banner() {
  return (
    <>
    <S.Container aria-label="banner">
      <S.Image>
        <Image src="/images/banner.jpg" layout="fill" />
      </S.Image>
      <S.Text>
        <Title size="large" weight="extraBold" text="Terapia Online" />
        <S.SubTitle>Psicóloga com mais de 20 anos de experiência especialista em relacionamentos interpessoais, adolescentes, adultos e casais.</S.SubTitle>
    <Button title='Agendar consulta' />
      </S.Text>
    <Image src="/images/banner.svg" layout='fill'/>
      <S.Shadow />
    </S.Container>
      <S.ImageContainer>
    <Image src={Waves} layout='fill'/>
      </S.ImageContainer>
      </>
  )
}