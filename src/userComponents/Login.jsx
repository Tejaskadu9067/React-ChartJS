import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios"




function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [redirect, setRedirect] = useState(false)
//   const {setUser} = useContext(UserContext)
  

  async function handleLoginSubmit(e){
    e.preventDefault();
    
    // try {
    //   const response = await axios.post('/login',{
    //     email,
    //     password
    //   })
    //   setUser(response.data)
    //   alert('Login Successful')
    //   setRedirect(true)
    // } catch (error) {
    //   alert('Login failed', error)
    //   console.log(error)
    // }
     
  }
//   if (redirect) {
//     return <Navigate to={"/"}/>
//   }

  return (
    <div className="mt-[10%] grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit} >
          <input type="email" placeholder="your@email.com" value={email} onChange={(e)=> setEmail(e.target.value)} />
          <input type="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
          <Link to={'/home'}><button  className="bg-pink-600 p-2 w-full text-white rounded-2xl">Login</button></Link>
          <div className="text-center py-2 text-gray-500 ">Not registered yet? 
            <Link className="underline text-black" to={'/register'}>  Register Now</Link> 
            </div>
        </form>
      </div>
    </div>
  );
}

export default Login;