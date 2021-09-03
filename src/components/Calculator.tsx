import React, { FunctionComponent, useEffect } from 'react'
import styled from 'styled-components'
import Button from './Button'
import { Digit, Operator } from '../lib/types'

interface CalculatorProps {
  onDigitButtonClick: (digit: Digit) => void
  onPointButtonClick: () => void
  onOperatorButtonClick: (operator: Operator) => void
  onChangeSignButtonClick: () => void
  onEqualButtonClick: () => void
  onAllClearButtonClick: () => void
  onChangePercentButtonClick: () => void
}

const StyledCalculator = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
`

export const Calculator: FunctionComponent<CalculatorProps> = ({
  onDigitButtonClick,
  onPointButtonClick,
  onOperatorButtonClick,
  onChangeSignButtonClick,
  onEqualButtonClick,
  onAllClearButtonClick,
  onChangePercentButtonClick
}) => {
  const handleKeyDown = ({ keyCode, shiftKey }: KeyboardEvent) => {
    console.log(keyCode)
    if (keyCode >= 48 && keyCode <= 57 && !shiftKey) {
      onDigitButtonClick((keyCode - 48) as Digit)
    } else if ((keyCode >= 96 && keyCode <= 105)) {
      onDigitButtonClick((keyCode - 96) as Digit)
    } else if (keyCode === 107 || (keyCode === 187 && shiftKey)) {
      onOperatorButtonClick('+')
    } else if (keyCode === 109 || keyCode === 189) {
      onOperatorButtonClick('-')
    } else if (keyCode === 106 || (keyCode === 56 && shiftKey)) {
      onOperatorButtonClick('×')
    } else if (keyCode === 111 || keyCode === 191) {
      onOperatorButtonClick('÷')
    } else if (keyCode === 13 || (keyCode === 187 && !shiftKey)) {
      onEqualButtonClick()
    } else if (keyCode === 46) {
      onChangePercentButtonClick()
    } else if (keyCode === 27) {
      onAllClearButtonClick()
    } else if (keyCode === 78) {
      onChangeSignButtonClick()
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyDown)
    return () => document.body.removeEventListener('keydown', handleKeyDown)
  })

  return (
    <StyledCalculator>
      <Button color="White" onClick={onAllClearButtonClick}>
        AC
      </Button>
      <Button color="White" onClick={onChangeSignButtonClick}>
        -/+
      </Button>
      <Button color="White" onClick={onChangePercentButtonClick}>
        %
      </Button>
      <Button color="Orange" onClick={() => onOperatorButtonClick('÷')}>
        ÷
      </Button>
      <Button color="White" onClick={() => onDigitButtonClick(7)}>
        7
      </Button>
      <Button color="White" onClick={() => onDigitButtonClick(8)}>
        8
      </Button>
      <Button color="White" onClick={() => onDigitButtonClick(9)}>
        9
      </Button>
      <Button color="Orange" onClick={() => onOperatorButtonClick('×')}>
        ×
      </Button>
      <Button color="White" onClick={() => onDigitButtonClick(4)}>
        4
      </Button>
      <Button color="White" onClick={() => onDigitButtonClick(5)}>
        5
      </Button>
      <Button color="White" onClick={() => onDigitButtonClick(6)}>
        6
      </Button>
      <Button color="Orange" onClick={() => onOperatorButtonClick('-')}>
        -
      </Button>
      <Button color="White" onClick={() => onDigitButtonClick(1)}>
        1
      </Button>
      <Button color="White" onClick={() => onDigitButtonClick(2)}>
        2
      </Button>
      <Button color="White" onClick={() => onDigitButtonClick(3)}>
        3
      </Button>
      <Button color="Orange" onClick={() => onOperatorButtonClick('+')}>
        +
      </Button>
      <Button color="White" isLarge={true} onClick={() => onDigitButtonClick(0)}>
        0
      </Button>
      <Button color="White" onClick={onPointButtonClick}>
        .
      </Button>
      <Button color="Orange" onClick={onEqualButtonClick}>
        =
      </Button>
    </StyledCalculator>
  )
}

export default Calculator
