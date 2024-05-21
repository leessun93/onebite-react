import './App.css'
import { useReducer } from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfount from './pages/Notfound';
import Edit from './pages/Edit';

const mockData = [
  {
    id : 1,
    createDate : new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용"
  },
  {
    id : 2,
    createDate : new Date().getTime(),
    emotionId: 2,
    content: "2번 일기 내용"
  }
]

function reducer(state, action){
  return state;
}


function App() {

  const [data, dispatch] = useReducer(reducer, mockData);

  return (
    <>     
      {/* <div>
        <Link to={"/"}>Home 홈</Link>
        <Link to={"/new"}>New 뉴</Link>
        <Link to={"/diary"}>Diary 다이어리</Link>
      </div> */}
      {/* <button onClick={onCLickButton}>New 페이지로 이동</button> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<New/>}/>
        <Route path="/diary/:id" element={<Diary/>}/>
        <Route path="/edit/:id" element={<Edit/>} />
        <Route path="*" element={<Notfount/>} />
      </Routes>
    </>
  )
}

export default App
