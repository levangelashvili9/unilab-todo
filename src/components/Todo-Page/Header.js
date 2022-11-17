import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/slices/loginSlice";
import { clear } from "../../redux/slices/todosSlice";

const Header = () => {
  const { username, photo } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const [logoutVisible, setLogoutVisible] = useState(false);

  const toggleLogoutVisibility = () => {
    setLogoutVisible((logoutVisible) => !logoutVisible);
  };

  const logOutHandler = () => {
    dispatch(logOut());
    dispatch(clear());
  };

  return (
    <Container>
      <Heading>TO DO</Heading>
      <LoginInfo>
        <Username>{username}</Username>
        <Photo onClick={toggleLogoutVisibility}>
          <Img src={photo} alt="" />
          <LogOutMenu visible={logoutVisible ? true : false}>
            <LogOutButton onClick={logOutHandler}>Log Out</LogOutButton>
          </LogOutMenu>
        </Photo>
      </LoginInfo>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  padding: 24px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;

  margin-bottom: 35px;

  @media screen and (max-width: 678px) {
    padding: 15px 21px;
  }
`;

const Heading = styled.h2`
  font: normal normal 900 36px/55px Poppins;
  color: #ffffff;

  @media screen and (max-width: 678px) {
    font: normal normal 900 28px/48px Poppins;
  }
`;

const LoginInfo = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Username = styled.div`
  font: normal normal 300 22px/33px Poppins;
  color: #ffffff;

  margin-right: 20px;

  @media screen and (max-width: 678px) {
    font: normal normal 300 18px/28px Poppins;
  }
`;

const Photo = styled.div`
  width: 68px;
  height: 68px;

  border-radius: 50%;
  cursor: pointer;

  @media screen and (max-width: 678px) {
    width: 50px;
    height: 50px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const LogOutMenu = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};

  width: 160px;
  height: 60px;

  bottom: -68px;
  right: 0;
  position: absolute;
  border-radius: 6px;

  background: rgba(181, 116, 112, 0.8);
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 678px) {
    width: 120px;
    height: 48px;

    bottom: -56px;
  }
`;

const LogOutButton = styled.button`
  font: normal normal 600 20px/33px Poppins;
  color: #fff;

  background: transparent;
  border: none;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 678px) {
    font: normal normal 600 16px/28px Poppins;
  }
`;
