import React from 'react'

const InputBaru = ({data, handleChange}) => {
  return (
    <div>
      <input type="text" value={data} onChange={handleChange}/>
    </div>
  )
}

export default InputBaru
