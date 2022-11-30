import Section from "../section";
import * as S from './styles'
import Image from "next/image";
import Waves from '../../../public/images/waves.svg'
export default function Questions() {

    
    return (
        <S.Container>
            <S.ImageContainer>
                <Image src={Waves} layout='fill' />
            </S.ImageContainer>
            <S.QuestionContainer>
                <h1>Dúvidas frequentes</h1>
                <Section title="Quanto tempo dura cada sessão?" description="A terapia online tem em média a duração de 50 minutos contados a partir do horário agendado, assim, importante a pontualidade para usufruir todo tempo da sessão." />
                <Section title="Quanto tempo dura cada sessão?" description="A terapia online tem em média a duração de 50 minutos contados a partir do horário agendado, assim, importante a pontualidade para usufruir todo tempo da sessão." />
                <Section title="Quanto tempo dura cada sessão?" description="A terapia online tem em média a duração de 50 minutos contados a partir do horário agendado, assim, importante a pontualidade para usufruir todo tempo da sessão." />
                <Section title="Quanto tempo dura cada sessão?" description="A terapia online tem em média a duração de 50 minutos contados a partir do horário agendado, assim, importante a pontualidade para usufruir todo tempo da sessão." />
            </S.QuestionContainer>
        </S.Container>
    )
}