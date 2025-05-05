import React, { useEffect, useState } from 'react'
import Paginator from '../../components/Paginator';
import Card from '../../components/Card';
import axios from 'axios'
import { Box, CircularProgress } from '@mui/material';

const Home: React.FC = () => {
  interface Post {
    body: string,
    id: number,
    title: string;
    userId: number;
}

  const [post, setPost] = useState<Post[]>([])
  const [loader, setLoader] = useState<Boolean>(false)
  const [page, setPage] = useState<Number>(1);

  const fetchTodo = async () => {
      setLoader(true)
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPost(response.data); 
      } catch (error) {
        console.error('An unexpected error occurred:', error);
      }finally{
          setLoader(false)
      }
  };
  useEffect(()=>{
      fetchTodo()
  },[])

  return (
    <div className='h-[100vh] flex flex-col'>
      <div className='h-fit bg-gradient-to-br from-[#e6aaf4] to-[#a052f4] py-2 px-6 text-white'>
        <h1 className='text-3xl mt-5'>Feed</h1>
        <div className='flex w-full mb-2 mt-16 bg-white border-none justify-center rounded-full py-2'>
          <Paginator page={post.length} setPage={setPage}/>
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
          post.slice(20 * page - 20 , 20 * page).map((item) => (
            <Card title={item.title} userId={item.userId} key={item.title} id={item.id} />
          ))
        }
      </div>
    </div>
  )
}

export default Home