import axios from 'axios';

const URL = process.env.REACT_APP_API_URI;

// const refreshToken = localStorage.getItem('refreshToken');

const getTodos = async (currentPage, token) => {
  console.log(token);
  const response = await axios.get(`${URL}?page=${currentPage}&pageSize=5`, {
    headers: {
      Authorization: token,
      // accessToken: token,
      // refreshToken: refreshToken,
    },
  });
  console.log('getTodos response', response);
  return response.data;
};

const postTodo = async (newTodo, token) => {
  await axios({
    url: `${URL}`,
    method: 'POST',
    headers: {
      Authorization: token,
      // accessToken: token,
      // refreshToken: refreshToken,
    },
    data: newTodo,
  })
    .then((res) => {
      if (res.status === 201) {
        alert('todo만들기 성공!');
      }
    })
    .catch((err) => console.log(err));
};

// const token = localStorage.getItem('accessToken');

const getTodoDetail = async (listId, token) => {
  const response = await axios.get(`${URL}/detail/${listId}`, {
    headers: {
      Authorization: token,
      // accessToken: token,
      // refreshToken: refreshToken,
    },
  });

  console.log(response.data.list);
  return response.data.list;
};

const deleteTodo = async (id, token) => {
  axios({
    url: `${URL}/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: token,
      // accessToken: token,
      // refreshToken: refreshToken,
    },
  })
    .then((res) => {
      if (res.status === 200) {
        alert('todo삭제 성공!');
      }
    })
    .catch((err) => console.log(err));
};

const updateIsDone = async (id, token) => {
  axios({
    url: `${URL}/${id}/isDone`,
    method: 'PUT',
    headers: {
      Authorization: token,
      // accessToken: token,
      // refreshToken: refreshToken,
    },
  })
    .then((res) => {
      if (res.status === 200) {
        alert('isDone 변경 완료!!');
      }
    })
    .catch((err) => console.log(err));
};

const updateEditTodo = async (id, newTodo, token) => {
  axios({
    url: `${URL}/detail/${id}`,
    method: 'PUT',
    headers: {
      Authorization: token,
      // accessToken: token,
      // refreshToken: refreshToken,
    },
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
