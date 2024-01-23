import React, {memo} from 'react'

export default memo (function ColorPicker({color, setcolor}) {
  const handleColor = e => setcolor(e.target.value)

  return (
    <div className='colorWrapper'>
        <input type="color" name="color" id="color" defaultValue={color} onChange={handleColor} />
        <label htmlFor='color'>Choose color</label>
    </div>
  )
})
