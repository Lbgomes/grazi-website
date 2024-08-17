import * as S from './styles'
import Button from '../button'
import Image from 'next/image'
import { motion, useAnimation } from "framer-motion"
import { useState } from 'react';
export default function Banner() {

  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);


  return (
    <>
      <S.Container aria-label="banner" id='home'>
        <S.Title > Cuide da sua saúde mental onde quer que esteja </S.Title>
        <S.SubTitle>Cuidar da saúde mental é fundamental, independentemente de onde você esteja. Sou a Grazi, uma psicóloga brasileira, e ofereço suporte e orientação em português para brasileiros ao redor do mundo.</S.SubTitle>
        <motion.div
          initial={{ x: '0vw' }}
          animate={controls} 
          onHoverStart={() => {
            controls.start({
              x: ['0vw', '100vw'],
              transition: {
                duration: 4, 
                ease: 'easeInOut', 
                times: [0, 1], 
                opacity: [1, 0],
              },
            });
            setIsHovered(true);
          }}
          onHoverEnd={() => {
            controls.start({
              x: '-0vw', 
              transition: {
                duration: 2, 
                ease: 'easeInOut',
              },
            })
            setIsHovered(false);
          }}
        >

          <S.Image>
            <Image src="/images/bus.png" layout="fill" alt="Imagem Grazi gomes" />
          </S.Image>
        </motion.div>
        <Button title='Agendar consulta' aria-label="agendar consulta" />
      </S.Container >
    </>
  )
}