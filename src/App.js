import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // 1. 브라우저 url과 리액트 앱을 연동해주는 기능을 하는 컴포넌트

import Home from './pages/Home.js'; // Home.js에서 .js 생략가능
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

import RouteTest from './components/RouteTest';

/* 
  리액트에서 제공하는 html 파일은 public 폴더의 index.html 하나지만
  app 컴포넌트와 app 컴포넌트 안의 라우터들을 통해  
  url 경로별로 렌더링되는 컴포넌트를 변경해주어
  마치 페이지가 이동한것처럼 보이게 함 ( CSR(Client Side Rendering) 방식 사용 - 페이지 전환 시 깜빡임 없고 , 이동 속도가 매우 빨라 쾌적하다 )
*/

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>
        <Routes>
          {/* <Route />는 url 경로와 컴포넌트를 매핑 시켜주는 컴포넌트 */}
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary" element={<Diary />} />
        </Routes>
        {/* a 태그를 이용하면 이동할 때 페이지를 새로고침한다. 이것은 spa가 아닌 mpa 특징 */}
        {/* spa의 장점인 빠른 페이지 이동, 쾌적한 사용자 경험 불가  */}
        {/* <a href={'/new'}>New로 이동</a> */}
        <RouteTest />
      </div>
    </BrowserRouter>
  );
}

export default App;
