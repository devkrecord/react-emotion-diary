import { useParams } from 'react-router-dom';

const Diary = () => {
  // useParams: react-router-dom 라이브러리가 제공하는 커스텀훅
  const { id } = useParams();
  console.log('id', id);
  return (
    <div>
      <h1>Diary</h1>
      <p>이곳은 일기 상세 페이지입니다.</p>
    </div>
  );
};

export default Diary;
