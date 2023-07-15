import AddButton from '../buttons/AddButton';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/modules/todos';
import useInput from '../../hooks/useInput';
import InputBox from './InputBox';
import { styled } from 'styled-components';

const InputList = () => {
  const [title, onChangeTitle] = useInput();
  const [content, onChangeContent] = useInput();

  const dispatch = useDispatch();

  const newObj = {
    id: uuidv4(),
    title,
    content,
    isDone: false,
  };

  const addTodo = () => {
    dispatch(addItem(newObj));
  };

  return (
    <StInputList>
      <StInputBox>
        <InputBox type='text' value={title} placeholder='할 일을 추가해주세요' onChange={onChangeTitle} />
        <InputBox
          type='text'
          value={content}
          placeholder='내용을 추가해주세요'
          onChange={onChangeContent}
          sort='content'
        />
      </StInputBox>
      <AddButton onClick={addTodo}>+</AddButton>
    </StInputList>
  );
};

export default InputList;

const StInputList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  width: 100%;
`;

const StInputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
