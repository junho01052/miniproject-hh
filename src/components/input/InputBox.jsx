import { css, styled } from 'styled-components';

const InputBox = ({ type, value, placeholder, onChange, sort }) => {
  return (
    <>
      <StInput type={type} value={value} placeholder={placeholder} onChange={onChange} sort={sort} />
    </>
  );
};

export default InputBox;

const StInput = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 15px;
  background-color: #5421b4;
  border: none;
  border-radius: 8px;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.16), 3px 3px rgba(69, 3, 85, 0.23);
  font-size: 15px;
  color: white;
  padding-left: 20px;

  &::placeholder {
    color: #fcf9ff;
  }

  ${(props) =>
    props.sort === 'content' &&
    css`
      height: 100px;
    `};
`;
