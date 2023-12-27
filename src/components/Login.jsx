import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [emailOrPhNo,setEmailOrPhNo] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [isSignInForm,setIsSignInForm] = useState(true);

    const submitHandler = (e) => {
        e.preventDefault();

    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

  return (
    <div className=''>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background image for login page"/>
        </div>
        <form className='w-3/12 absolute bg-black left-0 right-0 m-auto my-36 p-12 text-white flex justify-center items-center flex-col bg-opacity-80 ' onSubmit={submitHandler}>
            <h1 className='text-3xl py-4 px-1 self-start  font-bold '>{isSignInForm ? "Sign In" : "Sign up"}</h1>
                {!isSignInForm && <input className='p-3 m-2 w-full rounded-lg bg-gray-700' type="text" value={name} placeholder='Enter full name' onChange={(e) => setName(e.target.value)} />}
                <input className='p-3 m-2 w-full rounded-lg bg-gray-700' type="text" value={emailOrPhNo} placeholder='Email or phone number' onChange={(e) => setEmailOrPhNo(e.target.value)} />
                <input className='p-3 m-2 w-full rounded-lg bg-gray-700' type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <button className='p-2 m-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign up"}</button>
                <p className='self-start cursor-pointer' onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix? Sign up now" : "Already user ? sign in now"}</p>
        </form>
    </div>
  )
}

export default Login