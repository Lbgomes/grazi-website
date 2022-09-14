import * as S from './styles'
import Image from 'next/image'
import LinkHeader from '../LinkHeader'
import Button from '../button'

export default function Header() {
    return(
        <S.Container>
            <S.LogoContainer>
                <Image src="/images/Logo.png" layout="fill"/>
            </S.LogoContainer>
            <S.Links>
                <LinkHeader href='/' title='Home' />
                <LinkHeader href='/Sobre' title='Sobre' />
                <LinkHeader href='/Contato' title='Contato' />
            </S.Links>
            <Button title='Agendamentos' />
        </S.Container>
    )
}