import './forum.scss';
import Like from '@ui/like';
import { useForumDetail } from '@hooks/forumHooks';
import { useParams } from 'react-router-dom';
import Card from '@ui/card';
import { dateFormat } from '@util/date';
import Button from '@ui/button';

const ForumDetailPage = () => {
  const params = useParams();
  const { forum, updateLike, deleteForum } = useForumDetail(
    params?.id ? parseInt(params.id, 10) : null,
  );

  return (
    <div className={'forum-detail-page'}>
      {forum && (
        <>
          <section className={'flex flex-justify-end'}>
            <Button onClick={deleteForum}>삭제</Button>
          </section>
          <Card className={'forum-detail'}>
            <h2 className={'title'}>
              {forum.title} <span>{dateFormat()}</span>
            </h2>
            <div className={'tag-container'}>
              <span
                className={'tag'}
                style={{ backgroundColor: forum.tag?.color }}
              >
                {forum.tag?.name}
              </span>
            </div>
            <div className={'content'}>{forum.content}</div>
            <div className={'like-container'}>
              <Like defaultChecked={forum.isLiked} onLike={updateLike} />
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default ForumDetailPage;
