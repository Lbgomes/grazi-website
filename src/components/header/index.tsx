import * as S from './styles'
import Image from 'next/image'
import LinkHeader from '../LinkHeader'
import Button from '../button'
import { useClickAway } from 'react-use';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import * as Ico from '@styled-icons/evaicons-outline'
import { Menu } from '@styled-icons/entypo';
import Link from 'next/link';

export default function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const reference = useRef(null)
    useClickAway(reference, () => {
        setMenuIsOpen(false)
    })
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: '100%' }
    }
    const subElement = [
        { path: '#home', name: 'Home' },
        { path: '#profile', name: 'Sobre' },
        { path: '#contact', name: 'Contato' }
    ]


    return (
        <>
            <S.Container>
                <S.web>
                    <S.LogoContainer>
                        <Image src="/images/Logo.png" layout="fill" alt="logo escrito Grazi gomes" />
                    </S.LogoContainer>
                    <S.Links>
                        <LinkHeader href='#home' title='Sobre' />
                        <LinkHeader href='#profile' title='Método' />
                        <LinkHeader href='#contact' title='Pacientes' />
                        <Button title='Marque uma sessão' aria-label="Agendamentos" />
                    </S.Links>
                </S.web>
            </S.Container>
            <S.Mobile  ref={reference}>
                <S.MenuHamburguer
                   
                    as={motion.nav}
                    initial={'closed'}
                    animate={menuIsOpen ? 'open' : 'closed'}
                    variants={variants}
                    transition={{ duration: 0.5 }}
                    aria-hidden={!menuIsOpen}
                >
                    <S.InsideMenu as={motion.div}>
                        {subElement.map((item, index) => (
                            <Link href={item.path} key={index} >
                                <S.LinkItem onClick={() => setMenuIsOpen(false)}>
                                    {item.name}
                                </S.LinkItem>
                            </Link>
                        )
                        )}
                        <S.ButtonContainer>

                            <Button title='Marque uma sessão' aria-label="Agendamentos" />
                        </S.ButtonContainer>
                    </S.InsideMenu>
                </S.MenuHamburguer>

                <S.HamburguerIcon
                    as={motion.button}
                    onClick={() => setMenuIsOpen(!menuIsOpen)}
                    aria-label="Handle Menu"
                >
                    {menuIsOpen ? (
                        <Ico.CloseOutline size="3rem" color="#fff" />
                    ) : (
                        <Menu size="3rem" color="#8A4F58" />
                    )}
                </S.HamburguerIcon>
            </S.Mobile>
        </>
    )
}