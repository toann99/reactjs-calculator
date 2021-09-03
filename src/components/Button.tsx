import React, { FunctionComponent } from 'react'

import styled, { css } from 'styled-components'

interface ButtonProps {
  color?:| 'White' | 'Orange'
  isLarge?: boolean
  onClick?: () => void
}

const colorToCss = (color: ButtonProps['color']) => {
  switch (color) {
    case 'White':
      return css`
        background-color: #c5c5c5;
        color: rgb(0, 0, 0);
      `
    case 'Orange':
      return css`
        background-color: #e68d10;
        color: #FFFFFF;
      `
  }

  return css`
    background-color: #c5c5c5;
    color: #FFFFFF;
  `
}

export const StyledButton = styled.button<ButtonProps>`
  font-family: Arial;
  font-size: 20px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 0;
  padding-top: 1em;
  padding-bottom: 1em;
  ${({ color }) => colorToCss(color)}
  ${({ isLarge }) =>
    isLarge &&
    css`
      grid-column-start: span 2;
    `}

  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
`
export const Button: FunctionComponent<ButtonProps> = ({ children, color, isLarge, onClick }) => {
  return (
    <StyledButton color={color} isLarge={isLarge} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button
