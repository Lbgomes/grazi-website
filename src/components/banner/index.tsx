import Title from '../Title'
import Image from 'next/image'
import * as S from './styles'
import Button from '../button'
import Waves from '../../../public/images/wavesNegative.svg'
export default function Banner() {
  return (
    <>
    <S.Container aria-label="banner" id='home'>
      <S.Image>
        <Image src="/images/banner.jpg" layout="fill" alt='sala de consulta' />
      </S.Image>
      <S.Text>
        <Title size="large" weight="extraBold" text="Terapia Online" />
        <S.SubTitle>Psicóloga especialista em relacionamentos interpessoais, adolescentes, adultos e casais.</S.SubTitle>
    <Button title='Agendar consulta' aria-label="agendar consulta" />
      </S.Text>
    <Image src="/images/banner.svg" layout='fill' alt="consultório"/>
      <S.Shadow />
    </S.Container>
      <S.ImageContainer>
    <Image src={Waves} layout='fill' alt="waves"/>
      </S.ImageContainer>
      </>
  )
}