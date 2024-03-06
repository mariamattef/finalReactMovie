import Joi from 'joi';
import React, { useState } from 'react';

export default function Login() {
  const [userLogin, setuserLogin] = useState({
     'email': '',
     'password': '',
  })
  let  getInputValue = (e) => {
    // let inputValue = e.target.value;
    let myuserLogin ={...userLogin}
    myuserLogin[e.target.name] = e.target.value;
    setuserLogin(myuserLogin)
    console.log(myuserLogin);

  }
  let submitFormData = (e) => {
    e.preventDefault();
    let validate = validateFormData();

  }
let validateFormData = () => {
    let schima = Joi.object({
     email: Joi.string().email({tlds:{allow:['com','org']}}),
     password : Joi.string().pattern(new RegExp('^[a-z][0-9]{3}$'))
    })
    return schima.validate(userLogin)
  }
  return (
   
     <>
      <div className='w-75 m-auto  py-5'>
        <h3>Login</h3>
        <form onSubmit={submitFormData}>
          <div>
             <label htmlFor="email">Email</label>
            <input onChange={getInputValue} className='form-control my-2' type="email" name='email' autoComplete='off' />
          </div>
           <div className="input-data my-3">
            <label htmlFor="password">Password</label>
            <input onChange={getInputValue} className='form-control my-2' type="password" name='password' autoComplete='new-password'/>
          </div>   
         
          <button className='btn btn-info text-white float-end my-3'>Login</button>
        </form>
</div>

    </>
  )
}
