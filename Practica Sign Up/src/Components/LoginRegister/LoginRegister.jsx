
import { FaEnvelope,  FaLock, FaUser } from 'react-icons/fa';
import styled from 'styled-components'

const LoginRegister = () => {
  return (
    <>
        <LoginWrapper>
            {/* <FormContainer>
          <TitleLogin>Login</TitleLogin>
            <FormAction action="">
          <InputBox>
            <input type="text" placeholder="Username" />
            <FaUser/>
          </InputBox>
          <InputBox>
            <input type="password" placeholder="Password" />
            <FaLock/>
          </InputBox>
          <InputForgot>
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password</a>
          </InputForgot>
          <Button type="submit">Login</Button>
          <RegisterLink>
            <p>
              Don't have an account? <a href="#">Register</a>
            </p>
          </RegisterLink>
        </FormAction>
        
            </FormContainer> */}
            <FormContainer>
          <TitleLogin>Registrarse</TitleLogin>
            <FormAction action="">
          <InputBox>
            <input type="text" placeholder="Username" />
            <FaUser/>
          </InputBox>
          <InputBox>
          <input type="email" placeholder="Email" />
            <FaEnvelope/>
          </InputBox>
          <InputBox>
            <input type="password" placeholder="Password" />
            <FaLock/>
          </InputBox>
          <InputForgot>
            <label>
              <input type="checkbox" />
              I agree to the terms & conditions
            </label>
 
          </InputForgot>
          <Button type="submit">Registrarse</Button>

        </FormAction>
        
            </FormContainer>
        </LoginWrapper>
    </>
  )
}

export default LoginRegister

const LoginWrapper = styled.section`
  position: relative;
  width: 450px;
  height: 500px;
  border-radius: 10px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, .1);
  backdrop-filter: blur(30px);
  border-radius: 10px;

`;

const FormContainer = styled.div`
  width: 100%;
  padding: 40px;
  
`;

const InputBox = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin: 30px 0;
 svg{
  position: absolute;
  right: 20px;
  top: 50%;
  color: #fff;
  font-size: 1rem;
  translate: 0 -50%;
 }

`;

const FormAction = styled.form`

input[type="text"],
input[type="email"],

input[type="password"]{
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  border: 2px solid rgba(255, 225, 225, .1);
  border-radius: 40px;
  font-size: 1rem;
  color: #fff;
  padding: 20px 45px 20px 20px;
}
input[type="text"]::placeholder,
input[type="email"]::placeholder,
input[type="password"]::placeholder{
  color: #fff;
  ;
}
 
button{
    width: 100%;
    height: 45px;
    background: #fff;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    cursor: pointer;
    font-size: 1rem;
    color: #333;
    font-weight: 700;
  }
`;

const TitleLogin = styled.h2`
  font-size: 35px;
  text-align: center;
`;


const InputForgot = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14.5px;
  margin: -15px 0 15px;
  color: #fff;
  label input{
    accent-color: #fff;
    margin-right: 6px;
  }

 
  a{
    text-decoration: none;
    color: #fff;
  }
  a:hover{
    text-decoration: underline;
  }

  
`;

const Button = styled.button`

`;


// const FormAction = styled.form``;
// const TitleLogin = styled.h2``;
