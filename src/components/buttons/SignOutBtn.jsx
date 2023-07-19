import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SignOutBtn = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('accessToken');
    alert('로그아웃 되었습니다. 로그인 페이지로 돌아갑니다.');
    navigate('/');
  };

  return (
    <>
      <StSignOutBtn onClick={handleSignOut}>로그아웃</StSignOutBtn>
    </>
  );
};

export default SignOutBtn;

const StSignOutBtn = styled.button`
  width: 100px;
  height: 40px;
  padding: 10.4px;
  margin: 2px 2px 10px 2px;
  background-color: #ffffff;
  color: #5421b4;
  border-radius: 18px;
  border: none;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.16), 3px 3px rgba(0, 0, 0, 0.16);
  position: absolute;
  top: 130px;
  left: 300px;
`;
