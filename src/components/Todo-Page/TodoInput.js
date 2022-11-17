import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addNewTodoItem } from "../../redux/slices/todosSlice";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const clickHandler = () => {
    inputValue === "" || dispatch(addNewTodoItem(inputValue));
    setInputValue("");
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="my task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></Input>
      <Button onClick={clickHandler}>Add</Button>
    </Container>
  );
};

export default TodoInput;

const Container = styled.div`
  width: 595px;
  display: flex;

  margin-bottom: 51px;

  @media screen and (max-width: 678px) {
    width: 480px;
    margin-bottom: 35px;
  }

  @media screen and (max-width: 550px) {
    width: 350px;
    margin-bottom: 28px;
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

  @media screen and (max-width: 678px) {
    min-height: 56px;
  }
`;

const Button = styled.button`
  width: 108px;
  background: #5efc8d;

  font: normal normal 300 32px/48px Poppins;

  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #000;
    color: #fff;
  }

  @media screen and (max-width: 678px) {
    font: normal normal 300 24px/38px Poppins;
  }
`;
