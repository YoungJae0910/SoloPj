import React from "react";
import MainTitle from "../MainTitle/MainTitle";
import styled from "styled-components";
import BoardList from "./BoardList";
import MoreButton from "../Buttons/MoreButton";

export default function Board() {
  return (
    <WrapDiv>
      <WrapInnerDiv>
        <MainTitle>Board</MainTitle>
        <BoardList />
      </WrapInnerDiv>
      <MoreButton />
    </WrapDiv>
  );
}

const WrapDiv = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WrapInnerDiv = styled.div`
  width: 1000px;
`;
