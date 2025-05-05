import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Detail';
import Login from './pages/Login';
import { PostProvider } from '../context/PostContext'; 

function App() {

  return (
    <>
      <div className='text-blue-400 font-extrabold'>
        <PostProvider>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/list/:id' element={<Detail />}></Route>
            <Route path='/login' element={<Login />}></Route>
          </Routes>
        </PostProvider>
      </div>
    </>
  )
}

export default App
