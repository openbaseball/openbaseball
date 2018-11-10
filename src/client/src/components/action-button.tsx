import React from 'react'
import {Button as RebassButton } from 'rebass'
import styled from 'styled-components'
import { history } from '../store'

interface IActionButtonProps {
  text: string
  to: string
}

// TODO: fix ANY interface
const Button: any = styled(RebassButton)`
  background-color: ${(props) => props.theme.colors.main};
  text-transform: uppercase;
  font-weight: bold;
  outline: none;
`

const ActionButton = (props: IActionButtonProps) => (
  <Button
    m={2}
    py={4}
    px={'4'}
    onClick={() => {history.push(props.to)}}
  >
    {props.text}
  </Button>
)

export default ActionButton
