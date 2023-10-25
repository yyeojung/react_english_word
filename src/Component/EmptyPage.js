import {Link} from 'react-router-dom';

function EmptyPage() {
  return (
    <>
        <h2>잘못된 페이지</h2>
        <Link to="/">돌아가기</Link>
    </>
  )
}

export default EmptyPage