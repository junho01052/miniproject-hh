import axios from 'axios';

const getTodos = async () => {
  const response = await axios.get(`https://hanghaemini1be.store/api/lists`);

  return response.data.lists;
};

const getTodoDetail = async (listId) => {
  // console.log('id2=', listId);
  const response = await axios.get(`https://hanghaemini1be.store/api/lists/detail/${listId}`);
  console.log(response.data.list);
  return response.data.list;
};

const postTodo = async (newTodo) => {
  axios({
    url: `https://hanghaemini1be.store/api/lists`,
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
    url: `https://hanghaemini1be.store/api/lists/${id}`,
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
    url: `https://hanghaemini1be.store/api/lists/${id}/isDone`,
    method: 'PUT',
  })
    .then((res) => {
      if (res.status === 200) {
        alert('isDone 변경 완료!!');
      }
    })
    .catch((err) => console.log(err));
};

export { getTodos, getTodoDetail, postTodo, deleteTodo, updateIsDone };
