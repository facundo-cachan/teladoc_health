import styled from "@emotion/styled"
import { memo } from 'react'

type Props = {
  disabled?: boolean
  text: string
  width?: number | string
  onClick?: () => void
}

const onClickDefault = () => console.log('Click !!!')

export const Button = memo(({ disabled = false, text, width = 'auto', onClick = onClickDefault }: Props) =>
  <StyledButton width={width} onClick={onClick} disabled={disabled}>{text}</StyledButton>)

const StyledButton = styled.button<{ width: Props['width'] }>`
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 0.5rem;
  cursor: pointer;
  width: ${({ width }) => width};
`
