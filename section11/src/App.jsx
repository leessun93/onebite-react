import { useState, useRef, useReducer, useCallback, createContext, useMemo } from 'react';
import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';


//임시 템프데이터
const mockData = [
  { id: 0,
    isDone : false,
    content : "React 공부하기",
    date : new Date().getTime(),
  },
  { id: 1,
    isDone : false,
    content : "빨래하기",
    date : new Date().getTime(),
  },
  { id: 2,
    isDone : false,
    content : "노래연습하기",
    date : new Date().getTime(),
  },
];

function reducer(state, action){
  switch(action.type){
    case "CREATE": return [action.data, ...state];
  
    case "UPDATE": return state.map((item)=>item.id === action.targetId ? {...item, isDone: !item.isDone} : item);
  
    case "DELETE": return state.filter((item)=>item.id !== action.targetId);

    default : return state;
  }
}

// //리랜더링 되니까 App외에 생성하자
// export const TodoContext = createContext();

//dispatch와 state 컨택스트로 분리
export const TodoStatecontext = createContext();
export const TodoDispatchContext = createContext();


function App() {

  // const [todos, setTodos] = useState(mockData);
  const [todos,dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) =>{
    dispatch({
      type: "CREATE",
      data : {
        id: idRef.current++,
        isdone: false,
        content: content,
        date: new Date().getTime(),
      }
    });
  },[]);

  const onUpdate = useCallback((targetId) =>{
    dispatch({
      type: "UPDATE",
      targetId: targetId
    });
  },[]);
    
    // //삭제
    // const onDelete = (targetId)=>{
    //   dispatch({
    //     type: "DELETE",
    //     targetId : targetId
    //   });
    // };

  // const func = useCallback(()=>{}, []);
  const onDelete = useCallback((targetId)=>{
    dispatch({
      type: "DELETE",
      targetId : targetId
    });
  }, []);

  const memoizedDispatch = useMemo(()=>{
    return {onCreate, onUpdate, onDelete};
  }, []);
  return (
    <div className='App'>
      {/* <Exam /> */}
      <Header/>
      {/* <TodoContext.Provider value={{todos, onCreate, onUpdate, onDelete}}> */}
      <TodoStatecontext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStatecontext.Provider>    
      {/* </TodoContext.Provider> */}
    </div>
  )
}

export default App
