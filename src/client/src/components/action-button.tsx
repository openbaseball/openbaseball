import React from 'react'
import {Button as RebassButton } from 'rebass'
import styled from 'styled-components'
import { history } from '../store'

interface IActionButtonProps {
  text: string
  to?: string
  onClick?: () => void,
}

// TODO: fix ANY interface
const Button: any = styled(RebassButton)`
  background-color: ${(props) => props.theme.colors.main};
  text-transform: uppercase;
  font-weight: bold;
  outline: none;
`
Button.defaultProps = {
  ...Button.defaultProps,
  m: 2,
  px: 4,
  py: 4,
}

const ActionButton = (props: IActionButtonProps) => (
  <Button
    onClick={() => {(props.onClick !== undefined)
      ? props.onClick()
      : history.push(props.to || '/')}}
  >
    {props.text}
  </Button>
)

export default ActionButton
