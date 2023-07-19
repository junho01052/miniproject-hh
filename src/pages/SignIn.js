import styled from 'styled-components';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import signInBg from '../asset/png/signInBg.png';
import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai';
import Google from '../asset/svg/google.svg';
import Kakao from '../asset/svg/kakao.svg';
import Apple from '../asset/svg/apple.svg';
import { useCookies } from 'react-cookie';

const SignIn = () => {
  const [cookies, setCookie] = useCookies(['id']);
  const [maintainSignIn, setMaintainSignIn] = useState(false);

  const onClickMaintainSignIn = () => {
    setMaintainSignIn(!maintainSignIn);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const handleLogin = async () => {
    let data = {
      email: email,
      password: password,
    };

    try {
      let response = await axios.post(`https://hanghaemini1be.store/api/user/login`, data);
      console.log('signInresponse=', response);
      localStorage.setItem('accessToken', response.data.Authorization);
      alert('로그인을 성공하였습니다.');
      navigate('/todos');
    } catch (error) {
      if (error.status === 404) {
        console.log(error.response);
        alert(error.response.data.message);
      } else {
        alert(error.message);
      }
    }
  };

  const emailVaidity = email.includes('@');
  const passwordValidity = password.length >= 8;

  if (localStorage.getItem('access_Token')) {
    window.location.replace('/todos');
  }

  return (
    <StSignIn>
      <StBgImg src={signInBg} alt='signInbg' />
      <SignInContainer>
        <SignInStyle>
          <InputWrapper>
            <input
              placeholder='이메일을 입력해주세요'
              data-testid='email-input'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailVaidity ? (
              <span className='valid'>사용가능한 이메일입니다</span>
            ) : (
              <span>이메일에는 '@'가 포함되어야 합니다</span>
            )}
            <input
              placeholder='비밀번호를 입력해주세요'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordValidity ? (
              <span className='valid'>사용가능한 비밀번호입니다</span>
            ) : (
              <span>비밀번호는 8자 이상이어야 합니다</span>
            )}
          </InputWrapper>
          {/* <StMaintainSignIn onClick={onClickMaintainSignIn}>
            {!maintainSignIn ? <AiOutlineCheckCircle size='15' /> : <AiFillCheckCircle size='15' />}
            <span>로그인 유지하기</span>
          </StMaintainSignIn> */}
          <ButtonWrapper>
            <button
              className={!emailVaidity || !passwordValidity ? 'disabled' : undefined}
              disabled={!emailVaidity || !passwordValidity ? 'disabled' : undefined}
              onClick={handleLogin}
            >
              로그인
            </button>
            <StSocialBtnWrapper>
              <button className='social disabled'>
                <img src={Kakao} alt='google' width='35px' />
                Kakao로 로그인
              </button>
              <button className='social disabled'>
                <img src={Apple} alt='google' width='40px' />
                Apple로 로그인
              </button>
              <button className='social disabled'>
                <img src={Google} alt='google' width='40px' />
                Google로 로그인
              </button>
            </StSocialBtnWrapper>
            <StLink to='/signup'>
              <span>아직 회원이 아니신가요?- </span>
              <span className='bold'>회원가입하러 가기</span>
            </StLink>
          </ButtonWrapper>
        </SignInStyle>
      </SignInContainer>
    </StSignIn>
  );
};

export default SignIn;

const StSignIn = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StBgImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const SignInContainer = styled.div`
  display: flex;
  position: absolute;
  min-width: 430px;
  width: 38vw;
  height: 85vh;
  background-color: #f9f0ff;
  border-radius: 40px;
  box-shadow: 9px 9px rgba(0, 0, 0, 0.16), 13px 13px rgba(0, 0, 0, 0.16);
  justify-content: center;
  align-items: center;
`;

const SignInStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  input {
    background-color: #fefcff;
    color: #2e0350;
    font-size: 13px;
    height: 60px;
    width: 380px;
    border: none;
    margin: 10px 0 10px 0;
    border-radius: 18px;
    padding-left: 20px;
    cursor: text;
    box-shadow: 2px 2px rgba(0, 0, 0, 0.16), 3px 3px rgba(0, 0, 0, 0.16);
    &::placeholder {
      color: #5421b4;
      font-size: 16px;
    }
  }
  span {
    font-size: 13px;
    color: #ff3232;
  }
  .valid {
    color: #0b96fe;
  }
`;
// const StMaintainSignIn = styled.div`
//   display: flex;
//   font-size: 13px;
//   gap: 3px;
//   color: #5421b4;
//   font-weight: 400;
//   cursor: pointer;
// `;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  button {
    width: 400px;
    height: 65px;
    padding: 10.4px;
    margin: 2px 2px 10px 2px;
    background-color: #5421b4;
    color: #ffffff;
    border-radius: 18px;
    border: none;
    font-size: 25px;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 2px 2px rgba(0, 0, 0, 0.16), 3px 3px rgba(0, 0, 0, 0.16);

    &.social {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      background-color: #ffffff;
      color: #310b7c;
      font-weight: 700;
    }
    &.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

const StSocialBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #b29ae2;
`;

const StLink = styled(Link)`
  text-decoration: none;
  font-size: 15px;
  color: #5421b4;

  .bold {
    font-size: 16px;
    font-weight: 600;
    color: #310b7c;
  }
`;
