import axios from 'axios';
import React, { useEffect, useState } from 'react';
import notfound from '../../not-found.jpg'
import { Link } from 'react-router-dom';

export default function People({itemNumber}) {
     let [trendingPeople, setTrendingPeople] = useState([]);
  let getTrendingPeople = async() => {
    let { data } = await axios.get('https://api.themoviedb.org/3/trending/person/day?api_key=c636ed7787cc302d96bf88ccf334e0d8');
    console.log(data.results);
    setTrendingPeople(data.results)
  }
  useEffect(() => {
       document.title='People'    
  }, [])
  
  useEffect(() => {
    getTrendingPeople();
  }, [])
  return (
    <div className='p-5 my-5 '>
        <div className='row mb-3'>
           <div className='col-md-4'>
        <div className="welcome">
          <div className="brdr w-25"></div>
          <h3>Trending <br />People<br />To watch now</h3>
          <p>most watched People by days</p>
          <div className="brdr mb-3"></div>
             </div>
           </div>
       {trendingPeople.slice(itemNumber).map((item) =>
        <div key={item.id} className='col-md-2 d-flex justify-content-end'>
           <Link className='nav-link' to={`/details/${item.id}/${item.media_type}`}>
            <div className='item position-relative'>
             {item.profile_path!==null? <img className='w-100 rounded-5' src={'https://images.tmdb.org/t/p/original' + item.profile_path} alt="" /> : <img className='w-100' src={notfound} alt='Person' />}
             <h2 className='h6 text-center py-3'>{item.name}</h2>
             <span className='position-absolute top-0 end-0 p-2 bg-info'>{item.popularity.toFixed(1)}</span>
        </div>
           </Link>
      </div> )}
 
    </div>
    </div>
  )
}
