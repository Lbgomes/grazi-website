import * as S from './styles'
import Image from "next/image";
import CheckIcon from '@mui/icons-material/Check';
export default function Questions() {

    const items = [
        "Ofereço psicoterapia <strong> individual, terapia de casal e terapia familiar </strong> em português, com atendimentos disponíveis tanto presencialmente quanto online, conforme a necessidade do paciente.",
        "Minha abordagem terapêutica é baseada na <strong> Terapia Cognitivo-Comportamental (TCC), </strong> uma abordagem comprovada cientificamente que ajuda meus pacientes a identificar e mudar padrões de pensamento e comportamento que contribuem para seus problemas de saúde mental.",
        "Utilizo também técnicas de <strong> Psicologia Provocativa, </strong> que garantem uma maior troca e interação durante as sessões, proporcionando um ambiente terapêutico dinâmico e engajador.",
        "Como psicoterapeuta, estou comprometida em fornecer um atendimento baseado em evidências, com essa abordagem meus pacientes podem desenvolver habilidades de enfrentamento para lidar com seus problemas de saúde mental e <strong> alcançar uma vida mais feliz e saudável. </strong>",
        "Com uma abordagem terapêutica <strong> criativa e descontraída, </strong> ajudo meus pacientes a lidar com questões como ansiedade, depressão, estresse e outros transtornos de saúde mental.",
        "Com diversos pacientes satisfeitos em meu portfólio, tenho experiência em ajudar pessoas a se adaptarem e se sentirem mais felizes no seu dia a dia."
    ]

    return (
        <S.Container>
            <S.Title>Como posso te ajudar</S.Title>
            <S.List>
                {items.map((item, index) => (
                    <S.Item key={index}>
                        <CheckIcon sx={{ fontSize: "2.4rem" }} />
                        <S.Text dangerouslySetInnerHTML={{ __html: item }}></S.Text></S.Item>
                ))}
            </S.List>
        </S.Container>
    )
}