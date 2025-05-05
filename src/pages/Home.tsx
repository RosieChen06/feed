import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className='h-[100vh]'>
      <div className='h-[30%] bg-gradient-to-br from-[#e6aaf4] to-[#a052f4] py-2 px-6 text-white'>
        <h1 className='text-3xl mt-5'>TODO</h1>
      </div>
      <div className='h-[70%] overflow-scroll'>

      </div>
      {/* <li><Link to="/list/1">detail</Link></li> */}

    </div>
  )
}

export default Home