import { useParams } from 'react-router-dom';
const ForumDetailPage = () => {
  const params = useParams();
  return <div>Detail{JSON.stringify(params)}</div>;
};

export default ForumDetailPage;
