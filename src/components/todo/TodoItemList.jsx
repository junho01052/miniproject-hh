import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';

const TodoItemList = () => {
  const data = useSelector((state) => {
    // console.log(state);
    return state.todos.lists;
  });

  return (
    <StTodoItemList>
      {data.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
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
`;
