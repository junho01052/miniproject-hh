import axios from 'axios';

const getTodos = async () => {
  const response = await axios.get(`http://43.201.31.108/api/lists`);

  return response.data.lists;
};

const getTodoDetail = async (listId) => {
  // console.log('id2=', listId);
  const response = await axios.get(`http://43.201.31.108/api/lists/detail/${listId}`);
  console.log(response.data.list);
  return response.data.list;
};

const postTodo = async (newTodo) => {
  axios({
    url: `http://43.201.31.108/api/lists`,
    method: 'POST',
    data: newTodo,
  })
    .then((res) => {
      if (res.status === 201) {
        alert('todo만들기 성공!');
      }
    })
    .catch((err) => console.log(err));

  // const { data } = await axios.post(`http://43.201.31.108/api/lists`, { todo });
  // return data;
};

export { getTodos, getTodoDetail, postTodo };
