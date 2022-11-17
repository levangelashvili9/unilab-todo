import React from "react";
import styled from "styled-components";
import Header from "../components/Todo-Page/Header";
import TodoApp from "../components/Todo-Page/TodoApp";

const TodoPage = () => {
  return (
    <Container>
      <Header />
      <TodoApp />
    </Container>
  );
};

export default TodoPage;

const Container = styled.div`
  height: 100vh;
`;
