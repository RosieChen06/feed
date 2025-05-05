import React, { useContext, useState } from 'react'
import Paginator from '../../components/Paginator';
import Card from '../../components/Card';
import { Box, CircularProgress } from '@mui/material';
import { PostContext } from '../../context/PostContext';
import { RxReload } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [page, setPage] = useState<Number>(1);
  const context = useContext(PostContext);
  const navigate  = useNavigate()

  const { posts, loader, fetchTodo, setUserLogin, userLogin } = context;
  const handleLogin = () => {
    if(userLogin.length>0) return
    navigate(`/login`)
  }

  return (
    <div className='h-[100vh] flex flex-col'>
      <div className='h-fit bg-gradient-to-br from-[#e6aaf4] to-[#a052f4] py-2 px-6 text-white'>
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-3xl font-bold text-white">Feed</h1>

        <div className="flex flex-row items-center gap-3">
          <p 
            className="border rounded-full px-4 py-1 bg-[#d7b4fc] text-sm cursor-pointer text-white"
            onClick={handleLogin}
          >
            {userLogin.length >0? userLogin:'Login'}
          </p>
          <RxReload
            className="text-white text-2xl font-semibold cursor-pointer"
            onClick={() => fetchTodo()}
          />
        </div>
      </div>
        <div className='flex w-full mb-2 mt-16 bg-white border-none justify-center rounded-full py-2'>
          <Paginator page={posts.length} setPage={setPage}/>
        </div>
      </div>
      <div className='flex-1 overflow-scroll w-full px-8 mt-4 justify-center items-center'>
        {
          loader? 
          <Box
            sx={{
              width: '100%',
              height: '20vh',
              display: 'flex',
              justifyContent: 'center', 
              alignItems: 'center', 
            }}
          >
            <CircularProgress color="secondary" size={30} />
          </Box>:
          posts.slice(20 * page - 20 , 20 * page).map((item) => (
            <Card title={item.title} userId={item.userId} key={item.title} id={item.id} />
          ))
        }
      </div>
    </div>
  )
}

export default Home