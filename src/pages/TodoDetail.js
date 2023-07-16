import bg2 from '../asset/png/bg2.png';
import { styled } from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsCircle } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';
import { PiPencilSimpleSlashBold } from 'react-icons/pi';
import { AiOutlineArrowLeft, AiOutlineCheck } from 'react-icons/ai';
import { RxPencil2 } from 'react-icons/rx';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getTodos, getTodoDetail } from '../api/todos';

const TodoDetail = () => {
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  const onClickEditIcon = () => {
    setEditMode(!editMode);
  };

  const { id } = useParams();
  const numberId = Number(id);

  //   const { isLoading, isError, data, error } = useQuery('todos', getTodoDetail(numberId));
  const { isLoading, isError, data, error } = useQuery('todos', getTodos);
  console.log('data=', data);

  //   const foundData = data?.find((item) => item.listId === Number(id));
  //   console.log(foundData);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error}</h1>;
  }

  return (
    <StTodoDetail>
      <img src={bg2} alt='background2' />
      {!editMode && (
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
              <div>{data.title}</div>
              <RxPencil2 onClick={() => onClickEditIcon()} size='35' color='#5421b4' cursor='pointer' />
            </div>
            <div className='content'>{data.content}</div>
          </StBoxOverlay>
        </>
      )}
      {editMode && (
        <>
          <StBox>
            <AiOutlineArrowLeft onClick={() => navigate(-1)} className='backIcon' size='30' />
            <StBottomIconContainer>
              <div></div>
              <div className='icon'>
                <BsCircle size='30' />
                <PiPencilSimpleSlashBold onClick={() => onClickEditIcon()} size='30' />
              </div>
            </StBottomIconContainer>
          </StBox>
          <StBoxOverlay>
            <div className='title'>
              <div>{data.title}</div>
              <AiOutlineCheck size='35' color='#5421b4' cursor='pointer' />
            </div>
            <div className='content'>{data.content}</div>
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

  .icon {
    margin: 10px 50px 20px 0px;
    gap: 20px;
    color: #5421b4;
    cursor: pointer;
  }
`;

const StBox = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 1700px;
  height: 760px;
  background-color: #f9f0ff;
  border-radius: 15px;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.16), 5px 5px rgba(69, 3, 85, 0.23);

  .backIcon {
    margin: 20px 0px 10px 50px;
    color: #5421b4;
    cursor: pointer;
  }
`;

const StBottomIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
  }
`;

const StBoxOverlay = styled.div`
  position: absolute;
  width: 1500px;
  height: 510px;
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
