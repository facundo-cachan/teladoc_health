import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { useEffect, useState } from 'react'
import { Button } from "./Button"
import logo from "./logo.svg"
import { useWindowSize } from './useWindowSize'

export const App = () => {
  const { width } = useWindowSize()
  const [btnWidth, setBtnWidth] = useState<number | string>('auto')
  const [deg, setDeg] = useState<boolean>(true)
  const rotation = keyframes`
          from {
            transform: rotate(${deg ? 0 : 360}deg);
          }
          to {
            transform: rotate(${deg ? 360 : 0}deg);
          }
      `

  useEffect(() => {
    setBtnWidth(width <= 500 ? '100%' : 'auto')
  }, [width])

  return (
    <Container>
      <Tile>
        <Logo src={logo} alt="logo" rotation={rotation} />
        <Button text="Toggle rotation direction" width={width} onClick={() => setDeg(!deg)} />
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

const Logo = styled.img<{ rotation?: any }>`
  height: 10rem;
  pointer-events: none;
  animation: ${({ rotation }) => rotation} infinite 20s linear;
`