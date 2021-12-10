import Button from '@ui/button';
import Input from '@ui/input';
import './forum.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changePageIndex, IFourmState } from '@store/forumSlice';
import { RootState } from '@store';
import { useForumList } from '@hooks/forumHooks';
import { ForumList } from '@components/forumList';

const ForumPage = () => {
  const dispatch = useDispatch();
  const { pageList, pageCountList, searchText } = useSelector<
    RootState,
    IFourmState
  >((state) => state.forum);
  const { forSearch, moveDetail, moveNewPost } = useForumList();

  return (
    <div className={'forum-page'}>
      <div>
        <section className={'flex flex-justify-between flex-align-center'}>
          <h3>묻고 답하기</h3>
          <Button onClick={moveNewPost}>+ 새로운 질문</Button>
        </section>
        <section className={'py-12'}>
          <Input search onSearch={forSearch} placeholder={'검색'} />
        </section>
        <section>
          <ForumList
            pageList={pageList}
            moveDetail={moveDetail}
            searchText={searchText}
          />
        </section>
        <section className={'pagination'}>
          {pageCountList.map((pageIndex) => (
            <Button
              key={pageIndex}
              onClick={() => dispatch(changePageIndex(pageIndex))}
            >
              {pageIndex + 1}
            </Button>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ForumPage;
