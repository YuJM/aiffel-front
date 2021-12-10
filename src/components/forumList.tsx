import Card from '@ui/card';
import Like from '@ui/like';
import { dateFormat } from '@util/date';

export const ForumList: React.FC<{
  pageList: any[];
  searchText?: string | null;
  moveDetail: (id: number) => void;
}> = ({ searchText, pageList, moveDetail }) => {
  if (searchText && pageList.length === 0) {
    return <h2>"{searchText}"에 관련된 글을 찾을 수 없습니다</h2>;
  } else {
    const contentRefine = (content: string) => {
      return content.length > 150 ? content.slice(0, 150) + '...' : content;
    };
    return (
      <ul className={'forum-list'}>
        {pageList.map((forum) => (
          <li key={forum.id}>
            <Card
              className={'forum-post'}
              focus
              onClick={() => moveDetail(forum.id)}
            >
              <div className={'like'}>
                <Like disabled defaultChecked={forum.isLiked} />
              </div>
              <div>
                <h2 className={'title'}>
                  <span>{forum.title}</span> <span>{dateFormat()}</span>
                </h2>
                <div className={'content'}>{contentRefine(forum.content)}</div>
                <div className="tag-container">
                  {forum?.tag && (
                    <span
                      className="tag"
                      style={{ backgroundColor: forum.tag.color }}
                    >
                      {forum.tag.name}
                    </span>
                  )}
                </div>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    );
  }
};
