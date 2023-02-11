import React, { useState } from 'react'

const Hitung = () => {
    const [value, setValue] = useState(0)
    const handlePlus = () =>{
        setValue(value + 1)
    }
    const handleMin = () => {
        if(value>0) {
            setValue(value - 1)
        }
    }

  return (
    <div>
      <h1>Count</h1>
      <button className='btn btn-primary me-3' onClick={handlePlus}>+</button>
      <span>{value}</span>
      <button className='btn btn-danger ms-3' onClick={handleMin}>-</button>
    </div>
  )
}

export default Hitung
