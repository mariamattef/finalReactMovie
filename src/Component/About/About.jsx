import React, { useEffect } from 'react'

export default function About() {
    useEffect(() => {
       document.title='About'    
  }, [])
  return (
    <div className='bg-info w-50 m-auto p-5 my-5 '>
      <h3>About Component</h3>
    </div>
  )
}
