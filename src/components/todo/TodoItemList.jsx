import TodoItem from './TodoItem';
import { styled } from 'styled-components';
import { getTodos } from '../../api/todos';
import { useQuery } from 'react-query';
import { useState } from 'react';
// import { useQueryClient } from 'react-query';

const TodoItemList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const token = localStorage.getItem('accessToken');

  const { isLoading, isError, data, error } = useQuery(['todos', currentPage], () => getTodos(currentPage, token));

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error}</h1>;
  }

  return (
    <StTodoItemList>
      {data.lists?.map((todo) => {
        return <TodoItem key={todo.listId} todo={todo} />;
      })}
      <StBtnContainer>
        <button
          className={currentPage <= 1 ? 'btn disabled' : 'btn'}
          disabled={currentPage <= 1 ? 'disabled' : undefined}
          onClick={() => {
            setCurrentPage((previousValue) => previousValue - 1);
          }}
        >
          Prev
        </button>
        <button
          className={currentPage === data.totalPages ? 'btn disabled' : 'btn'}
          disabled={currentPage === data.totalPages ? 'disabled' : undefined}
          onClick={() => {
            setCurrentPage((previousValue) => previousValue + 1);
          }}
        >
          Next
        </button>
      </StBtnContainer>
    </StTodoItemList>
  );
};

export default TodoItemList;

const StTodoItemList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 96%;
  margin-bottom: 60px;
`;

const StBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;

  .btn {
    width: 80px;
    height: 40px;
    border-radius: 8px;
    border: none;
    color: #fcf9ff;
    background-color: #5421b4;
    box-shadow: 3px 3px rgba(0, 0, 0, 0.16), 3px 3px rgba(69, 3, 85, 0.23);
    cursor: pointer;

    &.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;
