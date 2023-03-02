import styled from "@emotion/styled"

type Props = {
  text: string;
  width?: number | string
};

export const Button = ({ text, width }: Props) => {
  return <StyledButton width={width}>{text}</StyledButton>;
};

const StyledButton = styled.button<{ width: Props['width'] }>`
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  width: ${({ width }) => width};
`;
