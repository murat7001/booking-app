import React, { useState } from 'react'
import { Link } from "react-router-dom"

const RegisterPage = () => {
    const[name,setName] =useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='mt-4 grow flex items-center justify-around'>
            <div className='-mt-64'>
                <h1 className='text-4xl text-center mb-4'>Register</h1>
                <form className='max-w-md mx-auto'>
                    <input type="text" placeholder='Your name' value={name} onChange={(e) => {setName(e.target.value)}} />
                    <input type="email" placeholder='your@email.com' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input type="password" placeholder='password' value={password} onChange={(e)=>{e.target.value}}/>
                    <button className='primary'>Save</button>
                    <div className='text-center py-2 text-gray-500'>Already a member? <Link className='underline text-black' to={"/login"}>Login</Link> </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage