import './App.css'
import { useReducer, useRef, createContext } from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfount from './pages/Notfound';
import Edit from './pages/Edit';


const mockData = [
  {
    id : 1,
    createDate : new Date("2024-03-19").getTime(),
    emotionId: 1,
    content: "1번 일기 내용"
  },
  {
    id : 2,
    createDate : new Date("2024-04-19").getTime(),
    emotionId: 2,
    content: "2번 일기 내용"
  },
  {
    id : 3,
    createDate : new Date("2024-05-19").getTime(),
    emotionId: 3,
    content: "2번 일기 내용"
  },
  {
    id : 4,
    createDate : new Date("2024-05-26").getTime(),
    emotionId: 4,
    content: "2번 일기 내용"
  },
]

function reducer(state, action){
  switch(action.type){
    case "CREATE": 
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item)=>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter(
        (item) => String(item.id) !== String(action.id)
      );
    default:
        return state;  
  } 
}

//새로운 컨텍스트 선언
//프로바이더로 계층 차근차근 데이터 전달이 아닌 한번에 전달
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {

  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  //새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) =>{
    dispatch({
      type:"CREATE",
      data : {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };
  
  //기존 일기 수정
  const onUpdate = (id, createDate,emotionId,content) =>{

    dispatch({
      type: "UPDATE",
      data: {
        id,
        createDate,
        emotionId,
        content,
      },
    });
  };

  //기존 일기 삭제
  const onDelete = (id) =>{
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <>
      {/* <div>
        <Link to={"/"}>Home 홈</Link>
        <Link to={"/new"}>New 뉴</Link>
        <Link to={"/diary"}>Diary 다이어리</Link>
      </div> */}
      {/* <button onClick={onCLickButton}>New 페이지로 이동</button> */}
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{
          onCreate,
          onUpdate,
          onDelete,
        }}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/new" element={<New/>}/>
            <Route path="/diary/:id" element={<Diary/>}/>
            <Route path="/edit/:id" element={<Edit/>} />
            <Route path="*" element={<Notfount/>} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App
