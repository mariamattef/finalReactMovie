
import { Navigate, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import About from '../About/About';
import Movies from '../Movies/Movies';
import People from '../People/People';
import Network from '../Network/Network';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Tvshows from '../Tvshows/Tvshows'
import NotFound from '../NotFound/NotFound';
import './App.css';
import MasterLayOut from '../MasterLayOut/MasterLayOut';
import { Component } from 'react';
import Details from '../Details/Details';
import { Offline, Online } from "react-detect-offline";

class App extends Component {

  logout = () => {
    console.log('logout')
    return <Navigate to='login' />
  }
 routes = createBrowserRouter([
   {
     path: '/', element: <MasterLayOut logout={() => this.logout()} />, errorElement: <NotFound />, children: [
 
      { index: true, element: <Home /> },
      { path: 'logo', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'movies', element: <Movies /> },
      { path: 'people', element: <People /> },
      {path:'details/:id/:mediaType',element:<Details />},
      { path: 'network', element: <Network /> },
      { path: 'tvshows', element: <Tvshows /> },
      { path: 'register', element: <Register />},
      { path: 'login', element: <Login /> },
      
  
] },
])
  render() {
    return (
      <>  
         <div>
             <Online><RouterProvider router={this.routes}/>  </Online>
             <Offline>you are offline</Offline>
        </div>
     
      </>
     
  )
}
 
}

export default App;
