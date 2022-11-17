import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as TodoIcon } from "../assets/todoIcon.svg";

const WelcomePage = () => {
  return (
    <Container>
      <StyledTodoIcon />
      <WelcomeText>Keep track of daily tasks in life</WelcomeText>
      <Link to={"login"}>
        <Button>Get Started</Button>
      </Link>
    </Container>
  );
};

export default WelcomePage;

const Container = styled.div`
  height: 100vh;
  padding: 90px 60px 0;

  background: rgb(0, 0, 0);
  text-align: center;

  @media screen and (max-width: 768px) {
    padding: 60px 40px 0;
  }

  @media screen and (max-width: 495px) {
    padding: 60px 30px 0;
  }
`;

const StyledTodoIcon = styled(TodoIcon)`
  margin-bottom: 46px;
`;

const WelcomeText = styled.h1`
  text-transform: capitalize;
  font: normal normal 600 54px/81px Poppins;
  color: #fff;

  margin-bottom: 150px;

  @media screen and (max-width: 768px) {
    font: normal normal 600 40px/68px Poppins;
  }

  @media screen and (max-width: 495px) {
    font: normal normal 600 32px/48px Poppins;
  }
`;

const Button = styled.button`
  min-height: 98px;
  padding: 0 58px;

  font: normal normal 300 48px/72px Poppins;
  background: #5efc8d;
  border: none;

  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #fff;
  }

  @media screen and (max-width: 495px) {
    min-height: 68px;
    padding: 0 40px;
    font: normal normal 300 32px/56px Poppins;
  }
`;
