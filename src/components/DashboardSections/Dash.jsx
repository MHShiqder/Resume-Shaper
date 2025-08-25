import useAuth from '@/hooks/useAuth'
import React from 'react'

function Dash() {
  const {user}=useAuth()
  return (
    <div className='mt-3'>
      <p className='font-plight text-primary text-2xl'>Hello, {user.displayName}</p>


    </div>
  )
}

export default Dash