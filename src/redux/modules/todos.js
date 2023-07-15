import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  lists: [
    {
      id: uuidv4(),
      title: '미니 프로젝트 구현하기',
      content: `7월 20일 목요일 오후 7시까지 완성본 제출\n
            목표\n
            1. TodoList CRUD 구현 및 API 통신\n
            2. FE와 BE 연결 및 배포 Test 진행\n            
            추가 목표\n
            1. infinite scroll 구현\n
            2. 로그인, 회원가입 구현\n
            3. Passport OAuth 구현`,
      isDone: false,
    },
    {
      id: uuidv4(),
      title: 'Node.js 공부하기',
      content: `7월 20일 목요일 오후 7시까지 완성본 제출\n
            목표\n
            1. TodoList CRUD 구현 및 API 통신\n
            2. FE와 BE 연결 및 배포 Test 진행\n            
            추가 목표\n
            1. infinite scroll 구현\n
            2. 로그인, 회원가입 구현\n
            3. Passport OAuth 구현`,
      isDone: false,
    },
    {
      id: uuidv4(),
      title: 'React 공부하기',
      content: `7월 20일 목요일 오후 7시까지 완성본 제출\n
            목표\n
            1. TodoList CRUD 구현 및 API 통신\n
            2. FE와 BE 연결 및 배포 Test 진행\n            
            추가 목표\n
            1. infinite scroll 구현\n
            2. 로그인, 회원가입 구현\n
            3. Passport OAuth 구현`,
      isDone: false,
    },
  ],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addItem: (state, action) => {
      return [...state.lists, action.payload];
    },
    deleteItem: (state, action) => {
      return state.lists.filter((item) => item.id !== action.payload);
    },
    updateItem: (state, action) => {
      return state.lists.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    },
  },
});

export default todoSlice.reducer;
export const { addItem, deleteItem, updateItem } = todoSlice.actions;
