import * as S from './styles'

type DropdownListProps = {
  text?: string
  color?: 'primary' | 'white'
  size?: 'small' | 'medium' | 'large'
  weight?: 'semiBold' | 'bold' | 'extraBold'
}

export default function Title({
  text,
  color,
  size,
  weight
}: DropdownListProps) {
  return (
    <S.Title weight={weight} color={color} size={size} aria-label="title">
      {text}
    </S.Title>
  )
}