import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'
export default function Navbar({logout}) {

  return (
      <>
      <nav className={`navbar navbar-expand-lg p-2 ${styles.bgnavbar}` }  >
  <div className="container-fluid">
    <Link className="navbar-brand fs-2" to=''>noxe</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page"to=''>Home</Link>
              </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page"to='movies'>Movies</Link>
              </li>
         <li className="nav-item">
          <Link className="nav-link" aria-current="page" to='Tvshows'>Tv Shows</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page"to='people'>People</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page"to='about'>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page"to='network'>Network</Link>
      </li>  
      {/* <li className="nav-item">
          <Link className="nav-link" to=''>اي حاجة</Link>
    </li> */}
     </ul>
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              
          <li className="nav-item">
          <Link className="nav-link "><i className="fa-brands fa-facebook"></i> </Link>      
        </li>
         <li className="nav-item">
          <Link className="nav-link "><i className="fa-brands fa-spotify"></i>  </Link>   
       </li>
       <li className="nav-item">
          <Link className="nav-link "><i className="fa-brands fa-square-instagram"></i>   </Link>   
              </li> 
      <li className="nav-item">
         <Link className="nav-link "> <i className="fa-brands fa-youtube me-4"></i></Link>  
       </li>    
       <li className="nav-item">
          <Link className="nav-link" aria-current="page"to='login'>Login</Link>
      </li> 
      <li className="nav-item">
          <Link className="nav-link" aria-current="page"to='register'>Register</Link>
              </li>
       <li className="nav-item">
          <Link className="nav-link" aria-current="page" onClick={logout}>Logout</Link>
      </li>         
      </ul>
    </div>
  </div>
</nav>
</>
  )
}
