import Image from "next/image"
import * as S from './styles'

export default function Profile() {
    return (
        <S.Container id='profile'>
            <S.ImageContainer>
                <Image src="/images/Vector.png" layout="fill" alt="Imagem Grazi gomes" />
            </S.ImageContainer>
            <S.TextContainer>
                <S.Title>
                    <span>
                    É compreensível que as pessoas sintam alguma confusão e insegurança na hora  de escolher um psicólogo, devido a vários fatores.
                    </span>
                    <span>
                    Exemplo, o seu estilo pessoal de abordar os problemas, qual o tipo de intervenção que irá utilizar,  ou  pense,  “terapia” será que será eficaz?
                    Te convido a descobrir;
                    </span>
                    <span className="space">
                    você está a um passo de sua transformação pessoal
                    </span>
                    <span>
                    Pare e dê uma chance a si mesmo.
                    </span>
                </S.Title>
                {/* <S.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt eu nibh vitae tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget ligula vehicula, pharetra dolor in, maximus lorem. Donec sit amet vestibulum sem. Integer suscipit enim quis posuere finibus. Duis vel rutrum justo. Etiam pretium tellus non diam fermentum, vitae tincidunt eros mattis. Aliquam faucibus lacinia ligula et sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut id ipsum quis nunc viverra tincidunt eget pulvinar dui. Suspendisse eget sapien id ante tristique gravida. Pellentesque consectetur et justo a suscipit. Morbi tincidunt nunc nunc, sed elementum ex rutrum vel.
                </S.Text> */}
            </S.TextContainer>
        </S.Container>
    )
}