import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {

  return (
    <>
      <div className='text-blue-400 font-extrabold'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/list/:id' element={<Detail />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
