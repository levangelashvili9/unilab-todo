import React from "react";
import styled from "styled-components";
import TodoInput from "./TodoInput";
import TodoItems from "./TodoItems";

const TodoApp = () => {
  return (
    <Container>
      <Heading>Add Your Daily Tasks</Heading>
      <TodoInput />
      <TodoItems />
    </Container>
  );
};

export default TodoApp;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.div`
  font: normal normal 600 42px/63px Poppins;
  margin-bottom: 27px;

  @media screen and (max-width: 678px) {
    font: normal normal 600 36px/56px Poppins;
    margin-bottom: 22px;
  }

  @media screen and (max-width: 550px) {
    font: normal normal 600 28px/48px Poppins;
    margin-bottom: 22px;
  }
`;
