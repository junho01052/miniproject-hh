import InputList from '../components/input/InputList';
import TodoItemList from '../components/todo/TodoItemList';
import Layout from '../ui/Layout';
import bg1 from '../asset/png/bg1.png';
import { styled } from 'styled-components';

const TodoListMain = () => {
  const formattedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <Layout>
      <StMain>
        <img src={bg1} alt='background1' />
        <StDate>{formattedDate}</StDate>
        <StTime>{formattedTime}</StTime>
        <StMainBody>
          <InputList />
          <TodoItemList />
        </StMainBody>
      </StMain>
    </Layout>
  );
};

export default TodoListMain;

const StMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    width: 100vw;
    height: 200px;
    min-width: 1100px;
    margin-bottom: 50px;
  }
`;

const StDate = styled.div`
  position: absolute;
  top: 100px;
  right: 300px;
  color: white;
  font-size: 15px;
  font-weight: 500;
`;

const StTime = styled.div`
  position: absolute;
  top: 120px;
  right: 300px;
  color: white;
  font-size: 35px;
  font-weight: 700;
`;
const StMainBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1200px;
`;
