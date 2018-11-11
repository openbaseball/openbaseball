import { lighten } from 'polished'
import React from 'react'
import styled from 'styled-components'
import {
  borderRadius,
  fontSize,
  space,
  width,
} from 'styled-system'

const TextAreaElem = styled.textarea`
  resize: vertical;
  outline: none;
  border: 1px solid ${(props: any) => lighten(0.7, props.theme.colors.main)};
  ${space}
  ${fontSize}
  ${width}
  ${borderRadius}
  :focus {
    border: 1px solid ${(props: any) => props.theme.colors.accent};
  }
`

const TextArea = (props: any) => (
  <TextAreaElem
    p={3}
    mt={1}
    mb={3}
    borderRadius={4}
    {...props}
  />
)

export default TextArea
