import ButtonWhats from '../buttonWhats'
import * as S from './styles'
import CalendlyEmbed from "../calendly";

export default function Apointment() {
    return (
        <S.Wrapper>

            <S.Container id="contact">
                <S.TitleContainer>
                    <S.Title>
                        AGENDE SUA PRIMEIRA CONSULTA
                    </S.Title>
                    <S.Text>
                        Agende agora sua primeira consulta para conhecer melhor meu trabalho e entender como a psicoterapia pode ajudá-lo. Durante a consulta, você terá a oportunidade de falar sobre seus problemas e objetivos, e eu explicarei como posso ajudá-lo a alcançá-los. Este primeiro encontro é uma oportunidade para nos conhecermos e entender se sou a profissional certa para você, sem nenhum compromisso. E o melhor de tudo: é gratuito. Clique no calendário para encontrar um horário.
                    </S.Text>
                    <S.Border></S.Border>
                    <S.Text>
                        Se você preferir, também pode me mandar uma mensagem no WhatsApp para tirar duvidas ou agendar sua primeira consulta.
                    </S.Text>
                    <ButtonWhats title='Me chame no whatsapp' />
                </S.TitleContainer>

                <CalendlyEmbed url="https://calendly.com/psigrazigomes/30min?embed_domain=www.psigrazigomes.com&embed_type=Inline&month=2024-08" />
            </S.Container>
        </S.Wrapper>

    )
}