import styled from "@emotion/styled";

type Props = {
  text: string;
};

export const Button = ({ text }: Props) => {
  return <StyledButton>{text}</StyledButton>;
};

const StyledButton = styled.button`
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
`;
