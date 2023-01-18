import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function BoardList() {
  const [list, setList] = useState([]); // axios로 불러온데이터를 넣어줄때 초기의값은 빈대괄호[] 를 꼭넣어줘야 undefind가 뜨지않음
  const fetchALL = async () => {
    axios
      .get("http://localhost:3001/ALL")
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchALL();
  }, []);

  return (
    <WrapDiv>
      {list
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
