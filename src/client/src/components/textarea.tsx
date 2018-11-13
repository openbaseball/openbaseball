import { lighten } from 'polished'
import React from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import styled from 'styled-components'
import {
  border,
  borderRadius,
  fontSize,
  space,
  width,
} from 'styled-system'

const TextAreaElem = styled(TextareaAutosize)`
  resize: vertical;
  outline: none;
  border: 1px solid ${(props: any) => lighten(0.7, props.theme.colors.main)};
  ${space}
  ${fontSize}
  ${width}
  ${border}
  ${borderRadius}
  :focus {
    border: 1px solid ${(props: any) => lighten(0.7, props.theme.colors.main)};
  }
`

const TextArea = (props: any) => (
  <TextAreaElem
    p={3}
    mt={1}
    mb={3}
    borderRadius={4}
    placeholder={props.placeholder || ''}
    {...props}
  />
)

export default TextArea
