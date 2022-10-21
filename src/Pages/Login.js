import React, {useContext,useState} from 'react';

import { useSetState } from 'react-use';
import { AuthContext } from '../context/Auth.context.js';
import './Login.css';
const initialState = {
  email: '',
  password: ''
}

const LoginForm = () => {
  const { state: ContextState, login } = useContext(AuthContext);
  const { isLoginPending, isLoggedIn, loginError} = ContextState;
  const [state, setState] = useSetState(initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = state;
    login(email, password);
    setState({
      email: '',
      password: ''
    });
  }
    
  const buttonStatus=()=>{
    console.log(isLoggedIn);
  }
  return (
    <div className="form-holder">
    <form name="loginForm" onSubmit={onSubmit}>
     <h1 className='text-2xl mb-4 font-semibold ml-36 text-slate-600'>Login</h1>
      <div className="row ">

        <div className=" ml-4 mb-2 text-slate-500">
          <label htmlFor="email">Username</label>
        </div>
        
        <div className="col-sm-9 col-md-6 text-black ml-4 mb-4 rounded-b-md " >
          <input className='h-9 w-80 '
            type="text" 
            name="email" 
            onChange={e => setState({email: e.target.value})} 
            value={state.email} 
            placeholder="Enter your username" 
          />
        </div>

        <div className="col-sm-3 col-md-6 ml-4 mb-2  text-slate-500">
          <label htmlFor="password">Password</label>
        </div>
        <div className="col-sm-9 col-md-6  text-black ml-4 mb-5 rounded-b-md">
            <input className='h-9 w-80 '
              type="password" 
              name="password" 
              onChange={e => setState({password: e.target.value})} 
              value={state.password} 
              placeholder="Enter your password" 
            />
        </div>

        <div className="col-sm-3 col-md-6">
        </div>
        
          {/* <input className="primary" type="submit" value="Login" /> */}
         <button onClick={buttonStatus} className="col-sm-9 col-md-6  bg-teal-400 text-center w-full ml-20 h-9 mb-3 font-semibold">Login</button>
    
        
      </div>

      { isLoginPending && <div>Please wait...</div> }
      { isLoggedIn && <div>Success.</div> 
      }
      { loginError && <div>{loginError.message}</div> }
    </form>
    </div>
  )
}


export default LoginForm;

