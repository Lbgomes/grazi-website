import * as S from './styles'
import Button from '../button'
import Image from 'next/image'
import { motion, useAnimation } from "framer-motion"
import { useState } from 'react';
export default function Banner() {

  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false)
  const handleHoverStart = () => {
    if (!hasAnimated) {
      controls.start({
        x: ['0vw', '100vw'],
        transition: {
          duration: 3,
          ease: 'easeInOut',
          times: [0, 1],
          opacity: [1, 0],
        },
      });
    }
  };

  const handleAnimationEnd = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
      controls.start({
        x: ['-100vw', '0vw'],
        transition: {
          duration: 2,
          times: [0, 1],
          ease: 'easeInOut',
        },
      }).then(() => {
        // Reset the state to allow hover-triggered animation again
        setHasAnimated(false);
      });
    }
  };


  return (
    <>
      <S.Container aria-label="banner" id='home'>
        <S.Title > Cuide da sua saúde mental onde quer que esteja </S.Title>
        <S.SubTitle>Cuidar da saúde mental é fundamental, independentemente de onde você esteja. Sou a Grazi, uma psicóloga brasileira, e ofereço suporte e orientação em português para brasileiros ao redor do mundo.</S.SubTitle>
        <motion.div
          initial={{ x: '0vw' }}
          animate={controls}
          onHoverStart={handleHoverStart}
          onAnimationComplete={handleAnimationEnd}
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