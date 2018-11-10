import React from 'react'
import { Button as RebassButton } from 'rebass'
import styled from 'styled-components'

interface IActionButtonProps {
  text: string
}

const Button = styled(RebassButton)`
  background-color: ${(props) => props.theme.colors.main};
  text-transform: uppercase;
  font-weight: bold;
  outline: none;
`

const ActionButton = (props: IActionButtonProps) => (
  <Button
    m={2}
    py={4}
  >
    {props.text}
    </Button>
)

export default ActionButton
