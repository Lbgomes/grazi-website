import Link from 'next/link'
import * as S from './styles'
import {Whatsapp} from '@styled-icons/boxicons-logos/Whatsapp'
interface linkHeaderProps {
    title: string
}
export default function ButtonWhats({ title }: linkHeaderProps) {
    return (
        <S.Container href="https://api.whatsapp.com/send?phone=5511952867624&text=Ol%C3%A1%20voc%C3%AA%20veio%20do%20meu%20site" target="_blank"><Whatsapp size="2rem" />{title}</S.Container>
    )
}