import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteItem, updateItem } from '../../redux/modules/todos';
import { styled } from 'styled-components';
import { BsCircle, BsCircleFill } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';

const TodoItem = ({ todo }) => {
  const [done, setDone] = useState(false);

  const onClickDoneIcon = () => {
    setDone(!done);
  };
  const dispatch = useDispatch();

  const deleteTodo = (id) => {
    dispatch(deleteItem(id));
  };

  const isDoneHandler = (id) => {
    dispatch(updateItem(id));
  };

  return (
    <StTodoItem>
      <StLink to={`/detail/${todo.listId}`}>
        <StTitle>{todo.title}</StTitle>
      </StLink>
      <StIcon>
        {!done && <BsCircle onClick={() => onClickDoneIcon()} className='icon' size='24' />}
        {done && <BsCircleFill onClick={onClickDoneIcon} className='icon' size='24' />}
        <FaTrashAlt className='icon' size='24' />
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
