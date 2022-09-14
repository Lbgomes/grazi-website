import Link from 'next/link'
import * as S from './styles'

interface linkHeaderProps {
    title: string
}
export default function Button({ title}: linkHeaderProps) {
    return(
        <S.Container href="https://api.whatsapp.com/send?phone=551152867624&text=Ol%C3%A1%20voc%C3%AA%20veio%20do%20meu%20site" target="_blank">{title}</S.Container>
    )
}