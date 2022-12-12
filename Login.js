import React, { useState } from 'react'

function Login() {
    const [userName,setuserName] = useState('');
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [error,setError] = useState(false);
    const formHandler = (e) => {
      e.preventDefault();
      if(userName.length === 0 && password.length === 0 && email.length === 0)
      {
        setError(true);
      }
      if(userName && password && email)
      {
        const loginObj={
            name:userName,
            mail:email,
            pwd:password
        }
      
        console.log(loginObj);
        alert(JSON.stringify(loginObj));
        
    }
  }
  

  return (
    <div>
    <h3>Login Page</h3>
    <form onSubmit={formHandler}>
    <input type="text" value={userName} placeholder='User Name' onChange={(e)=> setuserName(e.target.value)}/><br/>
    <div>
    {error && userName.length ===0? <label style={{color:'red'}}>Username is required</label>:""}
    </div>
    <br/>
    <input type="email" value={email} placeholder='Email'  onChange={(e)=> setemail(e.target.value)}/><br/>
    <div>
    {error && email.length ===0? <label style={{color:'red'}}>Email is required</label>:""}
    </div>
    <br/>
    <input type="password" value={password} placeholder='Password'  onChange={(e)=> setpassword(e.target.value)}/><br/>
    <div>
    {error && password.length ===0? <label style={{color:'red'}}>Password is required</label>:""}
    {error && password.length >0 && password.length <8 ? <label style={{color:'red'}}>Password should be min 8</label>:""}
    
    </div>
    <br/>
    <button type='submit'>Login</button>
    </form>
    </div>
    )
  }
  
  export default Login

  //ternary condition:
  // cond ? expr1 : expr2