import Image from "next/image"
import * as S from './styles'

export default function Profile() {

    const info = ["Sou uma psicóloga formada no Brasil, com vasta experiência em atendimento a pacientes de diversas origens.",
        "Minha abordagem é direta, porém divertida, e meu objetivo é ajudar meus pacientes a lidarem com problemas de saúde mental de maneira eficaz e acolhedora.",
        "Ofereço atendimentos online e presenciais, conforme a necessidade de cada um, para garantir que todos recebam o suporte adequado.",
        "Tenho experiência em tratar uma ampla variedade de questões de saúde mental, incluindo ansiedade, depressão, estresse e dificuldades de adaptação. Seja qual for sua situação, estou aqui para ajudá-lo a se sentir melhor e mais adaptado.",
        "Meu compromisso é oferecer um suporte consistente e de qualidade, seja em uma consulta presencial em meu consultório ou em uma sessão online.",
        "Vamos trabalhar juntos para alcançar seu bem-estar e promover uma vida mais equilibrada e satisfatória."
    ]
    return (
        <S.Container id='profile'>
            <S.ImageContainer>
                <Image src="/images/grazi.jpeg" layout="fill" alt="Imagem Grazi gomes" />
            </S.ImageContainer>
            <S.TextContainer>
                    {info.map((text, index) => <S.Text key={index}>{text}</S.Text>)}
            </S.TextContainer>
        </S.Container >
    )
}