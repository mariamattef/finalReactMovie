import axios from 'axios';
import Joi, { allow, date } from 'joi';
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';


export default function Register() {
    let [user, setuser] = useState(
{
    "username":"",
    "phone":"",
    "email":"",
    "password":""
}
    ) 
  
  // let [errorMessage, seterrorMessage] = useState('');
  // let [errorlist, seterrorlist] = useState([]);

  let submitFormData = async (e) => {
    e.preventDefault();
    let {data}= await axios.post('http://localhost:8000/users', user);
    // console.log(data)
    // let datainfo = [];
    //  datainfo.push(+data);
    // console.log(datainfo)
    
    // Check if the user ID already exists in the existingUsers array
    let existingUsers = [];
   let userExists = {...data}
     if (userExists.email!==data.email) {
      // If the user ID doesn't exist, add the new user to the array
       existingUsers.push(userExists);
       console.log(userExists)
    } else {
      // If the user ID already exists, log an error message
      console.log("Error: User with the same ID already exists");
    }
   ;

   
    //   existingUsers.map((existingUser) => {
    //   if (existingUser.email !== data.email) {
    //     existingUsers.push(data);
    //   }
    //   else {
    //     console.log("Error: User with the same Email already exists");
    //   }
    // });





  



    // let {data} = await axios.post('http://localhost:8000/users',user);
    // console.log(data)
    // goToLogin();
    // let valdate = validateFormData();
    
     };
  // let goToLogin = () => {
  // //  Navigate('/login')
  //  }

  let getInputValue = (e) => {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setuser(myUser)
   
  }
  // let validateFormData = () => {
  //   let schima = Joi.object({
  //     first_name: Joi.string().required().alphanum().min(2).max(10),
  //     last_name:Joi.string().alphanum().required().min(2).max(10),
  //     age: Joi.number().required().min(20).max(80),
  //     email: Joi.string().email({tlds:{allow:['com','org']}}),
  //     password: Joi.string().pattern(new RegExp('^[a-z][0-9]{3}$')),
  //   })
  //   return schima.validate(user)
  // }

  return (
    <>
     <div className="w-75 mx-auto py-5">
        <h2>Registeration Form</h2>
        {/* {validateError.map((error, index) =>
          <div key={index} className="alert alert-danger my-2">{error.message}</div>
        )} */}
        {/* {errorMsg ? <div className="alert alert-danger my-2">{errorMsg}</div> : ""} */}
        <form onSubmit={submitFormData}>
          <div className="input-data my-2">
            <label htmlFor="username">Name:</label>
            <input onChange={getInputValue} type="text" className="form-control my-2" name="username" />
          </div>
           <div className="input-data my-2">
            <label htmlFor="phone">Phone:</label>
            <input onChange={getInputValue} type="number" className="form-control my-2" name="phone" />
          </div>
          <div className="input-data my-2">
            <label htmlFor="email">Email:</label>
            <input onChange={getInputValue} type="email" className="form-control my-2" name="email" />
          </div>
          <div className="input-data my-2">
            <label htmlFor="password">Password:</label>
            <input onChange={getInputValue} type="password" className="form-control my-2" name="password" />
          </div>

          <button className="btn btn-sm btn-primary my-3 float-end">register</button>
          {/* <p className="my-4">Have an account? <Link className="text-primary text-decoration-none" to="/login">Login</Link></p> */}
          <div className="clear-fix"></div>
        </form>
      </div> 













      {/* <div className='w-75 m-auto  py-5'>
        <h3>Registation Form</h3> */}
        {/* {errorMessage?<div className='alert alert-danger'>{errorMessage}</div>:''} */}
        {/* <form onSubmit={submitFormData} >
          <div className="input-data my-3">
            <label htmlFor="first_name">firstName</label>
            <input onChange={getInputValue}  className='form-control my-2' type="text" name='first_name' autoComplete='given-name' />
          </div>
          <div className="input-data my-3">
            <label htmlFor="last_name">lastName</label>
            <input onChange={getInputValue} className='form-control my-2' type="text" name='last_name' autoComplete='family-name' />
          </div>
          <div className="input-data my-3">
            <label htmlFor="age">Age</label>
            <input onChange={getInputValue} className='form-control my-2' type="number" name='age' autoComplete='age' />
          </div>
           <div className="input-data my-3">
            <label htmlFor="email">Email</label>
            <input onChange={getInputValue} className='form-control my-2' type="email" name='email' autoComplete='off' />
          </div>
           <div className="input-data my-3">
            <label htmlFor="password">Password</label>
            <input onChange={getInputValue} className='form-control my-2' type="password" name='password' autoComplete='new-password'/>
          </div>   
          <button className='btn btn-info text-white float-end my-3'>Register</button>
          <div className="clear-fix"></div>
        </form>
</div> */}

    </>
  )
}
