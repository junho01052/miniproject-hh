import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { BsCircle, BsCircleFill } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';
import { useMutation, useQueryClient } from 'react-query';
import { deleteTodo } from '../../api/todos';
import { updateIsDone } from '../../api/todos';
import { useParams } from 'react-router-dom';

const TodoItem = ({ todo }) => {
  const token = localStorage.getItem('accessToken');
  const queryClient = useQueryClient();
  const { id } = useParams();

  const { mutate: deleteMutaion } = useMutation(() => deleteTodo(id, token), {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  const onClickDeleteButton = () => {
    deleteMutaion();
  };

  const { mutate: updateIsDoneMutation } = useMutation(updateIsDone(id, token), {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  const onClickIsDoneButton = () => {
    updateIsDoneMutation();
  };

  return (
    <StTodoItem>
      <StLink to={`/todos/detail/${todo.listId}`}>
        <StTitle>{todo.title}</StTitle>
      </StLink>
      <StIcon>
        {!todo.isDone && <BsCircle onClick={() => onClickIsDoneButton(todo.listId)} className='icon' size='24' />}
        {todo.isDone && <BsCircleFill onClick={() => onClickIsDoneButton(todo.listId)} className='icon' size='24' />}
        <FaTrashAlt onClick={() => onClickDeleteButton(todo.listId)} className='icon' size='24' />
      </StIcon>
    </StTodoItem>
  );
};

export default TodoItem;
const StTodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  padding: 0px 20px 0px 20px;
  margin-top: 20px;
  background-color: #fcf9ff;
  border-radius: 8px;
  border: none;

  box-shadow: 3px 3px rgba(0, 0, 0, 0.16), 3px 3px rgba(69, 3, 85, 0.23);
`;

const StLink = styled(Link)`
  text-decoration: none;
`;

const StIcon = styled.div`
  display: flex;
  gap: 10px;
  .icon {
    color: #5421b4;
    cursor: pointer;
  }
`;

const StTitle = styled.div`
  font-size: 22px;
  font-weight: 800;
  color: #2e0350;
`;
