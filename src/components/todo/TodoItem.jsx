import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteItem, updateItem } from '../../redux/modules/todos';
import { styled } from 'styled-components';
import { BsCircle } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const deleteTodo = (id) => {
    dispatch(deleteItem(id));
  };

  const isDoneHandler = (id) => {
    dispatch(updateItem(id));
  };

  return (
    <StLink to={`/api/lists/${todo.id}`}>
      <StTitle>{todo.title}</StTitle>
      <StIcon>
        <BsCircle className='icon' size='24' />
        <FaTrashAlt className='icon' size='24' />
      </StIcon>
    </StLink>
  );
};

export default TodoItem;

const StLink = styled(Link)`
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
  text-decoration: none;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.16), 3px 3px rgba(69, 3, 85, 0.23);
`;

const StIcon = styled.div`
  display: flex;
  gap: 10px;
  .icon {
    color: #5421b4;
  }
`;

const StTitle = styled.div`
  font-size: 22px;
  font-weight: 800;
  color: #2e0350;
`;
