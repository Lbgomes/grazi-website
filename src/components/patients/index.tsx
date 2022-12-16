
import * as S from './styles'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from '../customArrow/nextArrow';
import PrevArrow from '../customArrow/prevArrow';

interface commentProps {
    text: string;
    patient: string
}
function Comment({text, patient}: commentProps) {
    return(
        <S.Comment>
            <S.Text>
                {text}
            </S.Text>
            <S.Patient>
            Iniciais do Paciente:{' '}{patient}
            </S.Patient>
        </S.Comment>
    )
}


export default function Patients() {

    var settings = {
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 7000,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <S.Container>
            <S.Feedback>Feedbacks</S.Feedback>
            <Slider  {...settings}>
            <Comment text='Na primeira sessão já me senti acolhida e sai com boas respostas para o que estava me afligindo.' patient='LS' />           
            <Comment text='Psicóloga super atenciosa! Adorei a sessão' patient='TFAC' />            
            <Comment text='Todas as seções com a Grazi, são ótimas ! A cada semana, me conhecendo mais, reconhecendo o meu valor, me amando. Muito feliz com o processo.' patient='DDNP' />
            <Comment text='A Grazi é uma profissional excepcional, aborda o tema de uma maneira objetiva.' patient='LLG' />
            <Comment text='Muito bom, está me ajudando bastante' patient='DDNP' />
            <Comment text='A Grazi é muito atenciosa e objetiva! Adorei a forma como ela aborda o tema trabalhado!' patient='LLG' />
            <Comment text='Foi muito bom, me senti tão a vontade que quase não parei de falar. Muito obrigada Grazi por me passar tanta confiança e por me deixar a vontade.' patient='DDNP' />
            <Comment text='Mto boa, Grazi é uma ótima psicóloga e consegue desenvolver uma boa conversa e nos acolher. Adoro mto minhas seções com ela.' patient='NAMS' />
            <Comment text='Gostei da consulta, a Grazi é bem objetiva e atenciosa nos pontos que mais são importantes e relevantes.' patient='EADS' />
            </Slider>
        </S.Container>
    )
}