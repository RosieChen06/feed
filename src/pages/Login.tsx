import React, { useContext, useState } from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../../context/PostContext';

const Login:React.FC = () => {
  const context = useContext(PostContext);
  const navigate = useNavigate()
  if (!context) {
    throw new Error('PostContext not found');
  }
  const { userLogin, setUserLogin } = context;
  const isDisabled = !userLogin;

  const handleLogin = () => {
    if(userLogin.length===0) return
    navigate(`/`)
  }

  return (
    <div className="flex flex-col w-full h-[100vh] justify-center items-center">
      <div className='shadow-xl px-12 py-16 rounded-lg flex flex-col text-center'>
        <h1 className='text-[40px] font-extrabold text-[#a052f4]'>Login</h1>
        <p className='text-[#c192f3] mt-4'>Login to explore more!</p>
        <input 
            className='border-[1px] border-gray-300 focus:outline-none text-[#a052f4] rounded-md px-2 py-2 mt-16 mb-4' 
            placeholder='Email' 
            required
            onChange={(e)=>setUserLogin(e.target.value)}
        >
        </input>
        <Button
            disabled={isDisabled}
            variant="outlined"
            onClick={handleLogin}
            className="flex items-center gap-1 ml-4"
            sx={{
                color: '#a052f4',              
                borderColor: '#a052f4',          
                '&:hover': {
                backgroundColor: '#f3e8ff',    
                borderColor: '#a052f4',        
                },
            }}
            >
            Log in With Email
            </Button>
      </div>
    </div>
  );
};

export default Login;