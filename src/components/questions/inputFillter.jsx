import React from 'react'

const InputFillter = (props) => {
  return (
    <div>
        <input type="text" onChange={e => props.filter(e.target.value)} placeholder='Search...' className='inputFillter'/>
    </div>
  )
}

export default InputFillter
