import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignout = () => {
    signOut(auth).then(() => {
      navigate("/");
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='absolute px-3 py-3 bg-gradient-to-b from-black z-10 flex justify-between w-screen'>
        <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix logo"/>
      {user && <div className='flex p-2'>
      <img className='w-10 m-2' src="https://webstockreview.net/images/user-icon-png-4.png" alt="userIcon"/>
      <button onClick={handleSignout} className='text-red-700 font-bold'>(Sign out)</button>
    </div>}
    </div>
    
  )
}

export default Header;