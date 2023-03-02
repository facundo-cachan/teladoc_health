import styled from "@emotion/styled"

type Props = {
  text: string;
  width?: number | string
  onClick?: () => void
};

const onClickDefault = () => console.log('Click !!!')

export const Button = ({ text, width, onClick = onClickDefault }: Props) => {
  return <StyledButton width={width} onClick={onClick}>{text}</StyledButton>;
};

const StyledButton = styled.button<{ width: Props['width'] }>`
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  width: ${({ width }) => width};
`;
