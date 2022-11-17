import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  toggleCompleted,
  deleteTodoItem,
} from "../../redux//slices/todosSlice";
import { ReactComponent as TickSVG } from "../../assets/tick.svg";
import { ReactComponent as DeleteSVG } from "../../assets/delete.svg";

const TodoItem = ({ todoItem, id }) => {
  const dispatch = useDispatch();

  return (
    <Container isActive={todoItem.completed ? true : false}>
      <ItemTitle>{todoItem.title}</ItemTitle>
      <Actions>
        <Completed onClick={() => dispatch(toggleCompleted(id))}>
          <TickSVG />
        </Completed>
        <Delete onClick={() => dispatch(deleteTodoItem(id))}>
          <DeleteSVG />
        </Delete>
      </Actions>
    </Container>
  );
};

export default TodoItem;

const Container = styled.div`
  padding-left: 24px;
  width: 100%;
  min-height: 54px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 4px;

  text-decoration: ${(props) => (props.isActive ? "line-through" : "normal")};
  color: #fff;
  background: ${(props) => (props.isActive ? "#E6EBFF" : "#000")};

  transition: all 0.2s;

  margin-bottom: 16px;

  @media screen and (max-width: 678px) {
    margin-bottom: 12px;
  }
`;

const ItemTitle = styled.div`
  font: normal normal 300 22px/33px Poppins;

  @media screen and (max-width: 678px) {
    font: normal normal 300 18px/28px Poppins;
  }
`;

const Actions = styled.div`
  display: flex;
  cursor: pointer;
`;

const Completed = styled.div`
  height: 54px;
  width: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s;

  &:hover {
    background: #5efc8d;
  }
`;

const Delete = styled.div`
  height: 54px;
  width: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s;

  &:hover {
    background: #fc5e5e;
  }
`;
