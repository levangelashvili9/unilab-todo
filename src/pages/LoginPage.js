import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/slices/loginSlice";
import UploadPhoto from "../components/Login-Page/UploadPhoto";
import UsernameInput from "../components/Login-Page/UsernameInput";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [file, setFile] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(logIn([user, file]));
    navigate("/todo");
  };

  return (
    <Container>
      <Form onSubmit={(e) => (file ? submitHandler(e) : e.preventDefault())}>
        <Heading>Get Started</Heading>
        <UploadPhoto file={file} setFile={setFile} />
        <UsernameInput user={user} setUser={setUser} />
        <Button type="submit">Sign In</Button>
      </Form>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  height: 100vh;
  background: rgb(0, 0, 0);
  padding: 40px;
`;

const Form = styled.form`
  max-width: 588px;

  padding: 33px 50px 63px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #fff;
  border-radius: 4px;

  @media screen and (max-width: 580px) {
    padding: 30px;
  }
`;

const Heading = styled.h2`
  font: normal normal 600 48px/72px Poppins;

  margin-bottom: 44px;

  @media screen and (max-width: 580px) {
    font: normal normal 600 38px/56px Poppins;
  }

  @media screen and (max-width: 465px) {
    font: normal normal 600 32px/48px Poppins;
  }
`;

const Button = styled.button`
  min-height: 66px;
  padding: 0 77px;

  font: normal normal 300 32px/48px Poppins;
  background: #5efc8d;
  border: none;

  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #000;
    color: #fff;
  }

  @media screen and (max-width: 465px) {
    min-height: 55px;
    padding: 0 65px;
    font: normal normal 300 24px/36px Poppins;
  }
`;
