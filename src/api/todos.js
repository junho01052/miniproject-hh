import axios from 'axios';
import Swal from 'sweetalert2';

const URL = process.env.REACT_APP_API_URI;

// const refreshToken = localStorage.getItem('refreshToken');

const getTodos = async (currentPage, token) => {
  // console.log(token);
  const response = await axios.get(`${URL}?page=${currentPage}&pageSize=5`, {
    headers: {
      Authorization: token,
    },
  });
  // console.log('getTodos response', response);
  return response.data;
};

const postTodo = async (newTodo, token) => {
  await axios({
    url: `${URL}`,
    method: 'POST',
    headers: {
      Authorization: token,
    },
    data: newTodo,
    // withCredentials: true,
  })
    .then((res) => {
      if (res.status === 201) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '새로운 ToDo가 만들어졌어요!',
          showConfirmButton: false,
          timer: 1500,
        });
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

  // console.log(response.data.list);
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
        Swal.fire('ToDo가 성공적으로 삭제됐어요');
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
        alert('ToDo 완료 상태가 변경됐어요');
      }
    })
    .catch((err) => console.log(err));
};

const updateEditTodo = async (id, newTodo, token) => {
  await axios({
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
        alert('ToDo가 성공적으로 변경됐어요');
      }
    })

    .catch((err) => console.log(err));
};

export { getTodos, getTodoDetail, postTodo, deleteTodo, updateIsDone, updateEditTodo };
