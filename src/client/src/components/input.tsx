import { lighten } from 'polished'
import React from 'react'
import styled from 'styled-components'
import {
  borderRadius,
  fontSize,
  space,
  width,
} from 'styled-system'

const InputElem = styled.input`
  outline: none;
  border: 1px solid ${(props: any) => lighten(0.7, props.theme.colors.main)};
  ${space}
  ${fontSize}
  ${width}
  ${borderRadius}
  :focus {
    border: 1px solid ${(props: any) => lighten(0.2, props.theme.colors.main)};
  }
`

const Input = (props: any) => (
  <InputElem
    p={3}
    mt={1}
    mb={3}
    placeholder={props.placeholder || ''}
    borderRadius={4}
    {...props}
  />
)

export default Input
