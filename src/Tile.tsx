import styled from "@emotion/styled"
import { memo, useState } from "react"
import { Button } from "./Button"
import Logo from './Logo'

const Tile = styled.div`
  width: 100%;
  border-top: 1px solid #484848;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

const Tiler = memo(({ width }: { width?: number | string }) => {
  const [deg, setDeg] = useState<boolean>(true)
  return <Tile>
    <Logo deg={deg} />
    <Button text="Toggle rotation direction" width={width}
      onClick={() => setDeg(!deg)}
    />
  </Tile>
})

export default Tiler