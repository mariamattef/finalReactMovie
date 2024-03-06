import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Tvshows({itemNumber}) {
   let [trendingTvshows, setTrendingTvshows] = useState([]);
  let getTrendingtvshows = async() => {
    let { data } = await axios.get('https://api.themoviedb.org/3/trending/tv/day?api_key=c636ed7787cc302d96bf88ccf334e0d8');
    console.log(data.results);
    setTrendingTvshows(data.results)
  }
    useEffect(() => {
       document.title='TvShows'    
  }, [])
  useEffect(() => {
    getTrendingtvshows();
  }, [])
  
  return (
<>    
<div className='row gy-3 p-5'>
           <div className='col-md-4'>
        <div className="welcome">
          <div className="brdr w-25"></div>
          <h3>Trending <br />Tvs<br />To watch now</h3>
          <p>most watched Tv shows by days</p>
          <div className="brdr"></div>
             </div>
           </div>
       {trendingTvshows.slice(itemNumber).map((item) =>
         <div key={item.id} className='col-md-2 d-flex justify-content-end'>
           <Link className='nav-link' to={`/details/${item.id}/${item.media_type}`}>
            <div className='item position-relative'>
          <img className='w-100 rounded-5' src={'https://images.tmdb.org/t/p/original'+item.poster_path} alt="" />
             <h2 className='h6 text-center py-3'>{item.name}</h2>
             <span className='position-absolute top-0 end-0 p-2 bg-info'>{item.vote_average.toFixed(1)}</span>
        </div>
           </Link>
      </div> )}
 
    </div>

    </>
  )
}
