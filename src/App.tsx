import styled from "@emotion/styled"
import { Suspense, lazy, useEffect, useMemo, useState } from 'react'
import { Button } from "./Button"

import { useWindowSize } from './useWindowSize'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Tiler = lazy(() => import('./Tile'))

export const App = () => {
  const { width } = useWindowSize()
  const [tiles, setTiles] = useState<number>(1)
  const [btnWidth, setBtnWidth] = useState<number | string>('auto')

  useEffect(() => {
    setBtnWidth(width <= 500 ? '100%' : 'auto')
  }, [width])

  const newLogo = () => {
    setTiles((prev: number) => prev >= 1 ? prev + 1 : prev)
  }
  const removeLogo = () => {
    setTiles((prev: number) => prev >= 1 ? prev - 1 : prev)
  }

  const BtnAdd = useMemo(() => (<Button text="Insert new logo before this one"
    width={btnWidth}
    onClick={newLogo}
  />), [btnWidth])
  const BtnRemove = useMemo(() => (<Button text="Remove this logo" width={btnWidth}
    onClick={removeLogo}
    disabled={tiles <= 1}
  />), [btnWidth, tiles])
  const TilerMem = useMemo(() => <Tiler width={btnWidth} />, [btnWidth])

  return (
    <Container>
      {Array.from({ length: tiles }, (_, i) => (
        <Suspense key={i} fallback="Loading ...">
          {TilerMem}
        </Suspense>
      ))}
      {BtnAdd}
      {BtnRemove}
    </Container>
  )
}
