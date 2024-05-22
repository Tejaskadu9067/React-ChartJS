import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function registerUser(e){
    e.preventDefault();
    try {
      await axios.post('/register', {
        name,
        email,
        password
      });
      alert('Registration successful. Now you can proceed to login.')
    } catch (error) {
      alert('Registration failed. Please try again later.')
    }
    
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input type="text" placeholder="Username" value={name} onChange={(e)=> setName(e.target.value)} />
          <input type="email" placeholder="your@email.com" value={email} onChange={(e)=> setEmail(e.target.value)} />
          <input type="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
          <button className="bg-pink-600 p-2 w-full text-white rounded-2xl">Register</button>
          <div className="text-center py-2 text-gray-500 ">Already registered? 
            <Link className="underline text-black" to={'/'}>  Login</Link> 
            </div>
        </form>
      </div>
    </div>
  )
}

export default Register
