import { useCallback, useEffect, useState } from 'react';
import { IForum } from '@model/forum';
import axios from 'axios';
import { forumURL } from '@model/http';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { onSearch, setForumList } from '@store/forumSlice';

/**
 * forum 상세 hook
 * @param id
 */
export function useForumDetail(id: number | null) {
  const [forum, setForum] = useState<IForum>();
  const navi = useNavigate();
  useEffect(() => {
    if (id) {
      axios
        .get(`${forumURL}/${id}`)
        .then(({ data }) => {
          setForum(data);
        })
        .catch((error) => {
          console.error(error);
          alert('서버와 통신 안되었습니다');
        });
    }
  }, [id]);
  /**
   * update like
   */
  const updateLike = useCallback(
    (isLike: boolean) => {
      axios
        .patch(`${forumURL}/${id}`, { isLike })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    [id],
  );
  /**
   * forum 삭제
   */
  const deleteForum = useCallback(() => {
    const re = window.confirm('질문을 삭제합니다');
    if (re) {
      axios
        .delete(`${forumURL}/${id}`)
        .then((data) => {
          navi('/forum');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id, navi]);
  return { forum, updateLike, deleteForum };
}

export function useForumList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  /*포럼 리스트 받아오기*/
  useEffect(() => {
    axios
      .get(forumURL)
      .then(({ data }) => {
        // console.log(data);
        dispatch(setForumList(data));
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {});
  }, [dispatch]);

  /**
   *  store에서 검색
   */
  const forSearch = useCallback(
    (text: string | null) => {
      dispatch(onSearch(text));
    },
    [dispatch],
  );
  /**
   * 상세페이지로 이동
   */
  const moveDetail = useCallback(
    (id: number) => {
      navigate(`/forum/${id}`);
    },
    [navigate],
  );
  /**
   * 질문 작성페이지로 이동
   */
  const moveNewPost = useCallback(() => {
    navigate('/forum/write');
  }, [navigate]);
  return { forSearch, moveDetail, moveNewPost };
}

/**
 * 질문작성 hook (통신동작은 확인)
 *
 */
export const useCreatePost = () => {
  const createPost = useCallback((forum: IForum) => {
    axios
      .post(forumURL, {})
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return { createPost };
};
