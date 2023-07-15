import axios from 'axios';

const getTodos = async () => {
  const response = await axios.get(`http://43.201.31.108/api/lists`);

  return response.data.lists;
};

const getTodoDetail = async (id) => {
  const response = await axios.get(`http://43.201.31.108/api/lists/${id}`);

  return response.data.lists.find((item) => item.listId === id);
};

export { getTodos, getTodoDetail };
