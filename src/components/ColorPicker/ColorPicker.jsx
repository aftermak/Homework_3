import React, { memo } from 'react'
import { MuiColorInput } from 'mui-color-input'

export default memo(function ColorPicker({ color, setcolor }) {
  const handleColor = e => setcolor(e)

  return (
    <MuiColorInput value={color} size='small' variant='standard' onChange={handleColor} label='Color' />
  )
})
