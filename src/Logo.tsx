import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
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

const LogoStyled = styled.img<{ rotation?: any }>`
  height: 10rem;
  pointer-events: none;
  animation: ${({ rotation }) => rotation} infinite 20s linear;
`

const Logo = ({ deg }: { deg?: boolean }) => {
  const rotation = keyframes`
          from {
            transform: rotate(${deg ? 0 : 360}deg);
          }
          to {
            transform: rotate(${deg ? 360 : 0}deg);
          }
      `

  return <LogoStyled src={logo} alt="logo" rotation={rotation} />
}

export default Logo