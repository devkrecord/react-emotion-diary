import { Link } from 'react-router-dom';

// <Link ><Link /> 리액트 라우터에서 제공하는 CSR(Client Side Rendering) 방식으로 컴포넌트를 이동 시켜주는 컴포넌트
// 실제로 페이지를 이동시킨다기보다 페이지 역할을 하는 컴포넌트를 갈아 끼우고 url을 바꿔 페이지가 이동한 것 처럼 보이게 함.
const RouteTest = () => {
  return (
    <>
      <Link to={'/'}>HOME</Link>
      <br />
      <Link to={'/diary'}>DIARY</Link>
      <br />
      <Link to={'/new'}>NEW</Link>
      <br />
      <Link to={'/edit'}>EDIT</Link>
    </>
  );
};

export default RouteTest;
