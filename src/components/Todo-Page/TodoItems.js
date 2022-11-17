import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoItems = () => {
  const { todosArray } = useSelector((state) => state.todos);

  return (
    <Container>
      {todosArray.map((todoItem, id) => {
        return <TodoItem todoItem={todoItem} id={id} key={id} />;
      })}
    </Container>
  );
};

export default TodoItems;

const Container = styled.div`
  width: 595px;

  @media screen and (max-width: 678px) {
    width: 480px;
  }

  @media screen and (max-width: 550px) {
    width: 350px;
  }
`;
