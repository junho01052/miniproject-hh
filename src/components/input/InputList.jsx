import AddButton from '../buttons/AddButton';

import useInput from '../../hooks/useInput';
import InputBox from './InputBox';
import { styled } from 'styled-components';

import { useMutation, useQueryClient } from 'react-query';
import { postTodo } from '../../api/todos';

const InputList = () => {
  const [title, setTitle, onChangeTitle] = useInput();
  const [content, setContent, onChangeContent] = useInput();

  const queryClient = useQueryClient();

  const { mutate } = useMutation(postTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  const newTodo = {
    title,
    content,
  };

  const onClickAddButton = () => {
    if (newTodo.title.length === 0 || newTodo.content.length === 0) {
      alert('할일과 내용 모두 추가해주세요');
    }
    mutate(newTodo);
    setTitle('');
    setContent('');
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
      <AddButton onClick={onClickAddButton}>+</AddButton>
    </StInputList>
  );
};

export default InputList;

const StInputList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  width: 100%;
`;

const StInputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
