import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import signInBg from '../asset/png/signInBg.png';
import Google from '../asset/svg/google.svg';
import Kakao from '../asset/svg/kakao.svg';
import Apple from '../asset/svg/apple.svg';

const SignUp = () => {
  //이메일, 비밀번호 확인
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleButton = async () => {
    axios({
      url: 'https://hanghaemini1be.store/api/user/signup',
      method: 'POST',
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        if (res.status === 201) {
          alert('회원가입에 성공하였습니다');
          navigate('/');
        }
      })
      .catch((err) => alert(err));
  };

  const emailVaidity = email.includes('@');
  const passwordValidity = password.length >= 8;

  if (localStorage.getItem('access_Token')) {
    window.location.replace('/todos');
  }

  return (
    <StSignUp>
      <StBgImg src={signInBg} alt='signInbg' />
      <SignUpContainer>
        <SignUpStyle>
          <InputWrapper>
            <input type='email' placeholder='사용할 이메일을 입력해주세요' onChange={(e) => setEmail(e.target.value)} />
            {emailVaidity ? (
              <span className='valid'>사용가능한 이메일입니다</span>
            ) : (
              <span>이메일에는 '@'가 포함되어야 합니다</span>
            )}
            <input
              type='password'
              placeholder='사용할 비밀번호를 입력해주세요'
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordValidity ? (
              <span className='valid'>사용가능한 비밀번호입니다</span>
            ) : (
              <span>비밀번호는 8자 이상이어야 합니다</span>
            )}
          </InputWrapper>
          <ButtonWrapper>
            <button
              onClick={handleButton}
              className={!emailVaidity || !passwordValidity ? 'disabled' : undefined}
              disabled={!emailVaidity || !passwordValidity ? 'disabled' : undefined}
            >
              회원가입
            </button>
            <StSocialBtnWrapper>
              <button className='social disabled'>
                <img src={Kakao} alt='google' width='35px' />
                Kakao로 회원가입
              </button>
              <button className='social disabled'>
                <img src={Apple} alt='google' width='40px' />
                Apple로 회원가입
              </button>
              <button className='social disabled'>
                <img src={Google} alt='google' width='40px' />
                Google로 회원가입
              </button>
            </StSocialBtnWrapper>
            <StLink to='/'>
              <span>이미 회원이신가요?- </span>
              <span className='bold'>로그인하러 가기</span>
            </StLink>
          </ButtonWrapper>
        </SignUpStyle>
      </SignUpContainer>
    </StSignUp>
  );
};

export default SignUp;

const StSignUp = styled.div`
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

const SignUpContainer = styled.div`
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

const SignUpStyle = styled.div`
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

  input {
    background-color: #fefcff;
    color: #2e0350;
    margin: 10px 0 10px 0;
    font-size: 13px;
    height: 60px;
    width: 380px;
    border: none;
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

// input {
//     font-size: 13px;
//     text-decoration: none solid rgb(12, 13, 14);
//     color: #0c0d0e;
//     height: 28px;
//     width: 268px;
//     border: 1px solid #babfc4;
//     margin: 5px 0 5px 0;
//     cursor: text;
//   }

//   button {
//     width: 268px;
//     height: 48px;
//     padding: 10.4px;
//     margin: 16px 2px 22px 2px;
//     border-radius: 10px;
//     border: none;
//     font-size: 18px;
//   }

//   p {
//     font-size: 15px;
//     color: #ff8282;
//   }
