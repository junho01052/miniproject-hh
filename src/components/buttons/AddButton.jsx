import { styled } from 'styled-components';

const AddButton = ({ children, onClick }) => {
  return (
    <>
      <StAddButton onClick={onClick}>{children}</StAddButton>
    </>
  );
};

export default AddButton;

const StAddButton = styled.button`
  background-color: #5421b4;
  color: white;
  font-size: 30px;
  margin-left: 40px;
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 8px;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.16), 3px 3px rgba(69, 3, 85, 0.23);
`;
