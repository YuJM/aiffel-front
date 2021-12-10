import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IForum } from '@model/forum';
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice';

export interface IFourmState {
  originForumList: IForum[];
  mainFormList: IForum[];
  pageCountList: number[];
  pageSize: number;
  pageIndex: number;
  pageList: IForum[];
  searchText: string | null;
  selectedForum: IForum | null;
}

const changePage = (state: IFourmState) => {
  const { pageIndex, pageSize } = state;
  state.pageList = state.mainFormList.slice(
    pageIndex * pageSize,
    (pageIndex + 1) * pageSize,
  );
};

function setPageCount(state: IFourmState) {
  state.pageCountList = Array.from({
    length: Math.ceil(state.mainFormList.length / state.pageSize),
  }).map((_, i) => i);
}

const ForumSlice = createSlice<
  IFourmState,
  SliceCaseReducers<IFourmState>,
  string
>({
  name: 'forum',
  initialState: {
    pageSize: 5,
    pageIndex: 0,
    originForumList: [],
    mainFormList: [],
    pageCountList: [],
    pageList: [],
    searchText: null,
    selectedForum: null,
  },
  reducers: {
    setForumList: (state, action: PayloadAction<IForum[]>) => {
      state.originForumList = action.payload;
      state.mainFormList = state.originForumList;
      state.pageIndex = 0;
      setPageCount(state);
      changePage(state);
    },
    changePageIndex: (state, action: PayloadAction<number>) => {
      state.pageIndex = action.payload;
      changePage(state);
    },
    onSearch: (state, action: PayloadAction<string | null>) => {
      const { payload } = action;
      state.pageIndex = 0;
      state.searchText = payload;
      if (payload === null) {
        state.mainFormList = state.originForumList;
      } else {
        const filterReg = new RegExp(`${payload}`, 'g');
        state.mainFormList = state.originForumList.filter(
          (forum) =>
            filterReg.test(forum.title) || filterReg.test(forum.content),
        );
      }
      setPageCount(state);
      changePage(state);
    },
    selectDetail: (state, action: PayloadAction<number>) => {
      const forum = state.originForumList.find((f) => f.id === action.payload);
      state.selectedForum = forum || null;
    },
  },
});

export const { setForumList, changePageIndex, onSearch, selectDetail } =
  ForumSlice.actions;
export default ForumSlice.reducer;
