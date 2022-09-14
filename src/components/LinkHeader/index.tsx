import * as S from './styles'
import Link from 'next/link'

interface linkHeaderProps {
    href: string
    title: string
}
export default function LinkHeader({href, title}: linkHeaderProps) {
    return(
            <Link href={href}>
            <S.Link>{title}</S.Link>
            </Link>
    )
}