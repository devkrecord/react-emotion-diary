import React, { useReducer, useRef } from 'react';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // 1. 브라우저 url과 리액트 앱을 연동해주는 기능을 하는 컴포넌트

import Home from './pages/Home.js'; // Home.js에서 .js 생략가능
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

// components
// import MyButton from './components/MyButton';
// import MyHeader from './components/MyHeader';

// import RouteTest from './components/RouteTest';

/* 
  리액트에서 제공하는 html 파일은 public 폴더의 index.html 하나지만
  app 컴포넌트와 app 컴포넌트 안의 라우터들을 통해  
  url 경로별로 렌더링되는 컴포넌트를 변경해주어
  마치 페이지가 이동한것처럼 보이게 함 ( CSR(Client Side Rendering) 방식 사용 - 페이지 전환 시 깜빡임 없고 , 이동 속도가 매우 빨라 쾌적하다 )
*/

/*

  🥸 React Router Dom의 유용한 기능
  REACT ROUTER V6
  : REACT에서 CSR기반의 페이지 라우팅을 할 수 있게 해주는 라티브러리

  1. Path Variable
      useParams

  2.Query String : 웹 페이지에 데이터를 전달하는 가장 간단한 방법
     useSearchParams

  3.Page Moving
      useNavigate

*/

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      newState = [...action.data, ...state];
      break;
    }
    case 'REMOVE': {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case 'EDIT': {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

  // CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: dataId.current,
        data: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };

  //REMOVE
  const onRemove = (targetId) => {
    dispatch({
      type: 'REMOVE',
      targetId,
    });
  };

  // EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: 'EDIT',
      data: {
        id: targetId,
        data: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          <div className="App">
            {/* <MyHeader
          headText={'App'}
          leftChild={
            <MyButton text={'왼쪽 버튼'} onClick={() => alert('left click')} />
          }
          rightChild={
            <MyButton
              text={'오른쪽 버튼'}
              onClick={() => alert('right click')}
            />
          }
        />
        <h2>App.js</h2>
        <MyButton
          text={'버튼'}
          onClick={() => alert('button click')}
          type={'positive'}
        />zzx
        <MyButton
          text={'버튼'}
          onClick={() => alert('button click')}
          type={'negative'}
        />
        <MyButton
          text={'버튼'}
          onClick={() => alert('button click')}
          type={'sdfsdf'}
        /> */}
            <Routes>
              {/* <Route />는 url 경로와 컴포넌트를 매핑 시켜주는 컴포넌트 */}
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/diary/:id" element={<Diary />} />
            </Routes>
            {/* a 태그를 이용하면 이동할 때 페이지를 새로고침한다. 이것은 spa가 아닌 mpa 특징 */}
            {/* spa의 장점인 빠른 페이지 이동, 쾌적한 사용자 경험 불가  */}
            {/* <a href={'/new'}>New로 이동</a> */}
            {/* <RouteTest /> */}
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
