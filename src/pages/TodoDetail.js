import bg2 from '../asset/png/bg2.png';
import { styled } from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsCircle } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { RxPencil2 } from 'react-icons/rx';

const TodoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const data = useSelector((state) => {
    return state.todos.lists;
  });

  const foundData = data.find((item) => {
    return item.id === id.trim('');
  });

  return (
    <StTodoDetail>
      <img src={bg2} alt='background2' />
      {foundData && (
        <>
          <StBox>
            <AiOutlineArrowLeft onClick={() => navigate(-1)} className='backIcon' size='30' />
            <StBottomIconContainer>
              <div></div>
              <div className='icon'>
                <BsCircle size='30' />
                <FaTrashAlt size='30' />
              </div>
            </StBottomIconContainer>
          </StBox>
          <StBoxOverlay>
            <div className='title'>
              <div>{foundData.title}</div>
              <RxPencil2 size='35' color='#5421b4' />
            </div>
            <div className='content'>{foundData.content}</div>
          </StBoxOverlay>
        </>
      )}
    </StTodoDetail>
  );
};

export default TodoDetail;

const StTodoDetail = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const StBox = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 1350px;
  height: 620px;
  background-color: #f9f0ff;
  border-radius: 15px;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.16), 5px 5px rgba(69, 3, 85, 0.23);

  .backIcon {
    margin: 15px 0px 10px 42px;
    color: #5421b4;
    cursor: pointer;
  }
`;

const StBottomIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .icon {
    margin: 10px 42px 10px 0px;
    gap: 20px;
    color: #5421b4;
  }

  div {
    display: flex;
  }
`;

const StBoxOverlay = styled.div`
  position: absolute;
  width: 1180px;
  height: 410px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  padding: 50px;

  .title {
    display: flex;
    justify-content: space-between;
    font-size: 27px;
    font-weight: 800;
    color: #2e0350;
    margin-bottom: 30px;
  }

  .content {
    white-space: pre-line;
    font-size: 18px;
    font-weight: 400;
    color: #2e0350;
    border-top: 1px solid #2e0350;
    padding-top: 30px;
  }
`;
