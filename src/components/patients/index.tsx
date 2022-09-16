
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
                {patient}
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
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <S.Container>
            <S.Feedback>Feedbacks</S.Feedback>
            <Slider {...settings}>
            <Comment text='Daniela é uma profissional muito capacitada, sempre muito coerente e sabe conduzir o tratamento com acolhimento e delicadeza. Só tenho a agradecer sua escuta apurada. Um abraço!' patient='Matheus' />           
            <Comment text='Daniela é uma profissional muito capacitada, sempre muito coerente e sabe conduzir o tratamento com acolhimento e delicadeza. Só tenho a agradecer sua escuta apurada. Um abraço!' patient='Murilo' />            
            <Comment text='Daniela é uma profissional muito capacitada, sempre muito coerente e sabe conduzir o tratamento com acolhimento e delicadeza. Só tenho a agradecer sua escuta apurada. Um abraço!' patient='Luiz' />
            <Comment text='Daniela é uma profissional muito capacitada, sempre muito coerente e sabe conduzir o tratamento com acolhimento e delicadeza. Só tenho a agradecer sua escuta apurada. Um abraço!' patient='Giullia' />
            </Slider>
        </S.Container>
    )
}