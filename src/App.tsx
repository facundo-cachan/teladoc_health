import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { useEffect, useState } from 'react'
import { Button } from "./Button"
import logo from "./logo.svg"
import { useWindowSize } from './useWindowSize'

export const App = () => {
  const { width } = useWindowSize()
  const [btnWidth, setBtnWidth] = useState<number | string>('auto')

  useEffect(() => {
    setBtnWidth(width <= 500 ? '100%' : 'auto')
  }, [width])

  return (
    <Container>
      <Tile>
        <Logo src={logo} alt="logo" />
        <Button text="Toggle rotation direction" width={btnWidth} />
        <Button text="Insert new logo before this one" width={btnWidth} />
        <Button text="Remove this logo" width={btnWidth} />
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
