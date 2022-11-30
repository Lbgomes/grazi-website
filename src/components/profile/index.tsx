import Image from "next/image"
import * as S from './styles'

export default function Profile() {
    return (
        <S.Container>
            <S.ImageContainer>
                <Image src="/images/Vector.png" layout="fill" />
            </S.ImageContainer>
            <S.TextContainer>
                <S.Title>
                    A sua psicóloga em valinhos Daniela Carneiro CRP 06/84989
                </S.Title>
                <S.Text>
                    Olá! Me chamo Daniela Carneiro, sou psicóloga a mais de 20 anos, pós-graduada pela USP e especialista em relacionamento interpessoal, psicopatologias (transtornos psicológicos, como ansiedade, depressão, fobias, transtornos do impulso, parafilias, entre outros). Atuando com adultos, adolescentes e casais.
                    Realizo atendimentos psicológicos em Valinhos/SP e também terapia online através de videochamada no Google meet.
                </S.Text>
            </S.TextContainer>
        </S.Container>
    )
}