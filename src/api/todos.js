import { faTableTennisPaddleBall } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const URL = process.env.REACT_APP_API_URI;

const getTodos = async () => {
  const response = await axios.get(`${URL}`);

  return response.data.lists;
};

const getTodoDetail = async (listId) => {
  // console.log('id2=', listId);
  const response = await axios.get(`${URL}/detail/${listId}`);
  console.log(response.data.list);
  return response.data.list;
};

const postTodo = async (newTodo) => {
  axios({
    url: `${URL}`,
    method: 'POST',
    data: newTodo,
  })
    .then((res) => {
      if (res.status === 201) {
        alert('todo만들기 성공!');
      }
    })
    .catch((err) => console.log(err));
};

const deleteTodo = async (id) => {
  axios({
    url: `${URL}/${id}`,
    method: 'DELETE',
  })
    .then((res) => {
      if (res.status === 200) {
        alert('todo삭제 성공!');
      }
    })
    .catch((err) => console.log(err));
};

const updateIsDone = async (id) => {
  axios({
    url: `${URL}/${id}/isDone`,
    method: 'PUT',
  })
    .then((res) => {
      if (res.status === 200) {
        alert('isDone 변경 완료!!');
      }
    })
    .catch((err) => console.log(err));
};

const updateEditTodo = async (id, newTodo) => {
  axios({
    url: `${URL}/detail/${id}`,
    method: 'PUT',
    data: newTodo,
  })
    .then((res) => {
      if (res.status === 200) {
        alert('todoitem 수정 성공!');
      }
    })
    .catch((err) => console.log(err));
};

export { getTodos, getTodoDetail, postTodo, deleteTodo, updateIsDone, updateEditTodo };
