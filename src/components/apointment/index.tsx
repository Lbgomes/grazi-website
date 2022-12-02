import ButtonWhats from '../buttonWhats'
import * as S from './styles'

export default function Apointment() {
    return(
     <S.Container>
        <S.Content>
        Agende o seu atendimento agora mesmo!
        <ButtonWhats title='Agendamentos' />
        </S.Content>
     </S.Container>
    )
}