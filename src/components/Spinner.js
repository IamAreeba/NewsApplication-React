
import React from 'react'
import loading from './loading.gif'

export default function Spinner() {
  return (
    <div className='text-center' >
        <img className='my-3' style={{height: "50px"}} src={loading} alt="loading" />
      
    </div>
  )
}
