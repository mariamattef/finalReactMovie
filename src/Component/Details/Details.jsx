import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {
  const [details, setDetails] = useState({})
  let params = useParams();
  
  let getItemsDetails =async () => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/${params.mediaType}/${params.id}?api_key=c636ed7787cc302d96bf88ccf334e0d8`);
    setDetails(data);
  }
    useEffect(() => {
       document.title='movie  /details'    
  }, [])
  useEffect(() => {
    getItemsDetails();
  },[])
  
  return (
    
    <div className='row p-5 h-50 align-items-center lh-lg'>
      <div className="col-md-4">
        {params.mediaType === 'movie' || params.mediaType === 'tv' ?
          <img className='w-100 h-80 rounded-top' src={'https://images.tmdb.org/t/p/original' + details.poster_path} alt="Details" /> :
          <img className='w-100 h-80 rounded-top' src={'https://images.tmdb.org/t/p/original' + details.profile_path} alt="Details" />}
      </div>
      <div className="col-md-8">
        <div className="info ">
          <h2>{details.title || details.name}</h2>
          <h5>{details.original_title}</h5>
           <p className='lead'>EveryoneEnds up inds in the same damned place </p>
          {details.vote_count?<div>vote count: {details.vote_count }</div>:''}
          { details.vote_average?<div>vote: {details.vote_average}</div>:''}
          {details.birthday?<div>Birthday: { details.birthday}</div>:''}
          <h6>Popularity: {details.popularity}</h6>
          <h6>Media type: { params.mediaType}</h6>
        <p>{details.overview}{details.biography}</p>
        </div>
      </div>
    </div>
  )
}
