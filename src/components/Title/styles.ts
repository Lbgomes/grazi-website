import styled, { css } from 'styled-components'

type TitleProps = {
  color?: 'primary' | 'white'
  size?: 'small' | 'medium' | 'large'
  weight?: 'semiBold' | 'bold' | 'extraBold'
}

export const Title = styled.div<TitleProps>`
  ${({ theme, color, size, weight }) => css`
    color: ${color === 'primary' ? '#EEDDDA' : '#8A4F58'};
    font-size: ${size === 'small'
      ? '2.8rem'
      : size === 'medium'
      ? '3.8rem'
      : '5.0rem'};
    font-weight: ${weight === 'semiBold'
      ? 600
      : weight === 'bold'
      ? 700
      : 800};
    @media (max-width: 768px) {
      font-size: ${size === 'small'
        ? '2.0rem'
        : size === 'medium'
        ? '2.8rem'
        : '3.8rem'};
    }
    @media (max-width: 375px) {
      font-size: ${size === 'small'
        ? theme.font.sizes.medium
        : size === 'medium'
        ? '2.0rem'
        : '2.8rem'};
    }
  `}
`