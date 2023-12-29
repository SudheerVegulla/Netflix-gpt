import React, { useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [emailOrPhNo,setEmailOrPhNo] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [isSignInForm,setIsSignInForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        const message = checkValidData(emailOrPhNo,password);
        setErrorMessage(message);
        if(message)return;
        //Authentiation for signup     
        if(!isSignInForm){
            createUserWithEmailAndPassword(auth, emailOrPhNo, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
updateProfile(user, {
  displayName: name, photoURL: "https://webstockreview.net/images/user-icon-png-4.png"
}).then(() => {
    const {uid,email,displayName,photoURL} = auth.currentUser;
    dispatch(addUser({uid:uid,email:email,displayName :displayName,photoURL:photoURL})); 
    navigate("/browse");
  // Profile updated!
  // ...
}).catch((error) => {
    setErrorMessage(error.message);
  // An error occurred
  // ...
});
    
    // console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " - " + errorMessage)
    // ..
  });

        }else{
            signInWithEmailAndPassword(auth, emailOrPhNo, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // console.log(user);
    navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " - " + errorMessage)
  });
        }
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
        <form className='w-4/12 absolute bg-black left-0 right-0 m-auto my-36 p-12 text-white flex justify-center items-center flex-col bg-opacity-80 '>
            <h1 className='text-3xl py-4 px-1 self-start  font-bold '>{isSignInForm ? "Sign In" : "Sign up"}</h1>
                {!isSignInForm && <input className='p-3 m-2 w-full rounded-lg bg-gray-700' type="text" value={name} placeholder='Enter full name' onChange={(e) => setName(e.target.value)} />}
                <input className='p-3 m-2 w-full rounded-lg bg-gray-700' type="text" value={emailOrPhNo} placeholder='Email or phone number' onChange={(e) => setEmailOrPhNo(e.target.value)} />
                <input className='p-3 m-2 w-full rounded-lg bg-gray-700' type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <button className='p-2 m-6 bg-red-700 w-full rounded-lg' onClick={submitHandler}>{isSignInForm ? "Sign In" : "Sign up"}</button>
                <p className='text-red-600 text-sm my-3'>{errorMessage}</p>
                <p className='self-start cursor-pointer' onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix? Sign up now" : "Already user ? sign in now"}</p>
        </form>
    </div>
  )
}

export default Login