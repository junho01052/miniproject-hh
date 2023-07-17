import bg2 from '../asset/png/bg2.png';
import { styled } from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { PiPencilSimpleSlashBold } from 'react-icons/pi';
import { AiOutlineArrowLeft, AiOutlineCheck } from 'react-icons/ai';
import { RxPencil2 } from 'react-icons/rx';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getTodoDetail } from '../api/todos';
import { useEffect } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { updateEditTodo } from '../api/todos';

const TodoDetail = () => {
  const [editMode, setEditMode] = useState(false);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const onClickEditIcon = () => {
    setEditMode(!editMode);
  };

  const { id } = useParams();

  const { isLoading, isError, data, error } = useQuery('tododetail', () => getTodoDetail(id));
  // console.log('data=', data);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setContent(data.content);
    }
  }, [data]);

  const newTodo = {
    title: title,
    content: content,
  };

  console.log('newTodo=', newTodo);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const { mutate: updateEditTodoMutation } = useMutation(
    () => {
      updateEditTodo(id, newTodo);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );

  const onClickEditCompleteButton = () => {
    updateEditTodoMutation();
    //muatation 매개변수 하나만
  };

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
          </StBox>
          <StBoxOverlay>
            <div className='title'>
              <input value={title} onChange={onChangeTitle} />
              <div className='icon'>
                <PiPencilSimpleSlashBold onClick={() => onClickEditIcon()} color='#5421b4' size='35' />
                <AiOutlineCheck
                  size='35'
                  color='#5421b4'
                  cursor='pointer'
                  onClick={() => onClickEditCompleteButton(data.listId, newTodo)}
                />
              </div>
            </div>
            <textarea value={content} onChange={onChangeContent} />
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
    display: flex;
    gap: 30px;
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
