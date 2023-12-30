import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { logo, userProfileImage } from '../utils/constants';
import FaceIcon from '@mui/icons-material/Face';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
 // we called this onAuthstateChanged in this file because header is present both in login & browse file so based on it user login status it will
 // navigate to respective page earlier we called this in body.jsx we shifted because getting error for navigate because routing is initiated in body itself.
  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid,email,displayName,photoURL} = user;
            dispatch(addUser({uid:uid,email:email,displayName :displayName,photoURL:photoURL})); 
            navigate("/browse");   
        } else {
            dispatch(removeUser());
            navigate("/");
        }
      });
      // unsubscribing onAuthStateChanged 
      return () => unsubscribe();
},[]);

  const handleSignout = () => {
    signOut(auth).then(() => {
      // navigate("/");
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='absolute px-3 py-3 bg-gradient-to-b from-black z-10 flex justify-between w-screen'>
        <img className='w-44' src={logo} alt="Netflix logo"/>
      {user && <div className='flex p-2'>
      {/* <img className='w-10 m-2' src={userProfileImage} alt="userIcon"/> */}
      <button onClick={handleSignout} className='text-red-700 font-bold mr-4'> <FaceIcon style={{marginBottom:'2px'}}/> (Sign out)</button>
    </div>}
    </div>
    
  )
}

export default Header;