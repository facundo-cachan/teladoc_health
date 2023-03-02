import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { useState } from "react"
import { Button } from "./Button"
import logo from "./logo.svg"

const Tile = styled.div`
  width: 100%;
  border-top: 1px solid #484848;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

const Logo = styled.img<{ rotation?: any }>`
  height: 10rem;
  pointer-events: none;
  animation: ${({ rotation }) => rotation} infinite 20s linear;
`

const Tiler = ({ width }: { width?: number | string }) => {
  const [deg, setDeg] = useState<boolean>(true)
  const rotation = keyframes`
          from {
            transform: rotate(${deg ? 0 : 360}deg);
          }
          to {
            transform: rotate(${deg ? 360 : 0}deg);
          }
      `

  return <Tile>
    <Logo src={logo} alt="logo" rotation={rotation} />
    <Button text="Toggle rotation direction" width={width} onClick={() => setDeg(!deg)} />
  </Tile>
}

export default Tiler