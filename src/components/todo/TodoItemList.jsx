import TodoItem from './TodoItem';
import { styled } from 'styled-components';
import { getTodos } from '../../api/todos';
import { useQuery } from 'react-query';

const TodoItemList = () => {
  const { isLoading, isError, data, error } = useQuery('todos', getTodos);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error}</h1>;
  }

  return (
    <StTodoItemList>
      {data.map((todo) => {
        return <TodoItem key={todo.listId} todo={todo} />;
      })}
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
