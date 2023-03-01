import React from "react";
import styled from "@emotion/styled";
import logo from "./logo.svg";
import { Button } from "./Button";
import { keyframes } from "@emotion/react";

export const App = () => {
  return (
    <Container>
      <Tile>
        <Logo src={logo} alt="logo" />
        <Button text="Toggle rotation direction" />
        <Button text="Insert new logo before this one" />
        <Button text="Remove this logo" />
      </Tile>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Tile = styled.div`
  width: 100%;
  border-top: 1px solid #484848;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  gap: 0.5rem;
`;

const rotation = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const Logo = styled.img`
  height: 10rem;
  pointer-events: none;
  animation: ${rotation} infinite 20s linear;
`;
