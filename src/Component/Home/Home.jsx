import React, { useEffect } from 'react'
import Movies from '../Movies/Movies'
import Tvshows from '../Tvshows/Tvshows'
import People from '../People/People'
export default function Home() {
  useEffect(() => {
       document.title='Home'    
  }, [])
  let itemNumber = 10;
  return (
    <div>
      <Movies itemNumber={itemNumber} />
      <Tvshows itemNumber={itemNumber}/>
      <People itemNumber={itemNumber}/>
    </div>
  )
}
