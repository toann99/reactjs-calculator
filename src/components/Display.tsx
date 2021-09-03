import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface DisplayProps {
  hasMemory: boolean
  expression: string
  value: string
}

const StyledIndicatorList = styled.div`
  font-size: 0.75em;
  line-height: 1;
  opacity: 0.4;
  text-align: right;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25em;
  min-height: 1em;
`

const StyledExpression = styled.span`
  margin-left: auto;
`

const StyleScreen = styled.div`
  font-size: 2em;
  min-height: 1.5em;
  display: flex;
  align-items: center;
  justify-content: flex-end;  
  overflow: hidden;
`

const StyledDisplay = styled.div`
  background-color: #91918d;
  color: #fff;
  padding: 0.25em 0.25em;
`

export const Screen: FunctionComponent<DisplayProps> = ({ value, hasMemory, expression }) => {
  return (
    <StyledDisplay>
      <StyledIndicatorList>
        {hasMemory &&
          <span>M</span>
        }

        <StyledExpression>
          {expression}
        </StyledExpression>
      </StyledIndicatorList>

      <StyleScreen>
        {value}
      </StyleScreen>
    </StyledDisplay>
  )
}

export default Screen
