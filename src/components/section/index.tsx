import { useRef, useState } from 'react'
import * as S from './styles'
import { AnimatePresence, motion } from 'framer-motion'
import {useClickAway} from 'react-use';

interface SectionProps {
    title: string
    description: string
}

export default function Section({description, title}: SectionProps) {
    const [isOpen, setIsOpen] = useState(false)
    const menuAnimation = {
        hidden: {
          opacity: 0,
          height: 0,
          padding: 0,
          zIndex: 0,
          transition: { zIndex: 0, duration: 0.3, when: 'afterChildren' }
        },
        show: {
          opacity: 1,
          height: 'auto',
          transitionEnd: { zIndex: 1 },
          transition: {
            duration: 0.3,
            zIndex: 1,
            when: 'beforeChildren'
          }
        }
      }

      const ref = useRef(null);
      useClickAway(ref, () => {
        setTimeout(() => {
            
            setIsOpen(false)
        }, 100);
      });
    
      
    return (
        <S.Container ref={ref}>
            <S.TitleContainer isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                {title}
            </S.TitleContainer>
            <AnimatePresence>
            {isOpen ? (
                 <motion.div
                 variants={menuAnimation}
                 initial="hidden"
                 animate="show"
                 exit="hidden"
                 aria-label="menu"
                 aria-hidden={isOpen}
               >
            <S.TextContainer>
                {description}
            </S.TextContainer>
               </motion.div>
            ): null}
            </AnimatePresence>
        </S.Container>
    )
}