import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { boardList } from "../../redux/modules/boardSlice";

export default function BoardList() {
  const dispatch = useDispatch();
  const lists = useSelector((state) => {
    return state.boardSlice.BOARD;
  });

  useEffect(() => {
    dispatch(boardList());
  }, [dispatch]);

  return (
    <WrapDiv>
      {lists
        .filter((item) => {
          return item.id === item.userid;
        })
        .map((item) => {
          return (
            <BoardItemDiv key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.contents}</p>
              <ContentsBtnDiv>
                <ContentsBtn>댓글 0개</ContentsBtn>
                <ContentsBtn>by : {item.userid}</ContentsBtn>
                <ContentsBtn>날짜</ContentsBtn>
              </ContentsBtnDiv>
            </BoardItemDiv>
          );
        })}
    </WrapDiv>
  );
}

const WrapDiv = styled.div`
  width: 100%;
  display: grid;
`;

const ContentsBtnDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ContentsBtn = styled.button`
  width: 80px;
  height: 20px;
  background-color: transparent;
  border: none;
  color: gray;
  cursor: pointer;
`;

const BoardItemDiv = styled.div`
  margin-bottom: 20px;
`;
