import React from "react";
import styled from "styled-components";

const UsernameInput = ({ user, setUser }) => {
  const changeHandler = (e) => {
    setUser(e.target.value);
  };

  return (
    <Container>
      <Label>fill in you name</Label>
      <Input
        type="text"
        placeholder="your name"
        required
        value={user}
        onChange={changeHandler}
      ></Input>
    </Container>
  );
};

export default UsernameInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  margin-bottom: 76px;

  @media screen and (max-width: 465px) {
    margin-bottom: 50px;
  }
`;

const Label = styled.label`
  font: normal normal 300 22px/33px Poppins;
  margin-bottom: 10px;

  @media screen and (max-width: 465px) {
    font: normal normal 300 18px/28px Poppins;
    margin-bottom: 6px;
  }
`;

const Input = styled.input`
  width: 100%;
  min-height: 76px;

  padding: 0 24px;
  border: none;
  border-radius: 4px;

  background: #e6ebff;

  font: normal normal 300 22px/33px Poppins;

  &:focus {
    outline: none;
  }

  &::placeholder {
    opacity: 0.2;
  }

  @media screen and (max-width: 465px) {
    min-height: 60px;
    padding: 0 20px;
    font: normal normal 300 18px/28px Poppins;
  }
`;
