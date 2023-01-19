import React, { useState } from "react";
import styled from "styled-components";

export default function ComentList() {
  const [comments, setComments] = useState(initialState);

  return (
    <div>
      {comments.map((item) => {
        return (
          <WrapDiv>
            <div>{item.title}</div>
            <div>{item.contents}</div>
            <div>2023.1.20</div>
          </WrapDiv>
        );
      })}
    </div>
  );
}

const initialState = [
  {
    id: 1,
    title: "hi1",
    contents: "hello world1",
  },
  {
    id: 2,
    title: "hi2",
    contents: "hello world2",
  },
  {
    id: 3,
    title: "hi3",
    contents: "hello world3",
  },
];

const WrapDiv = styled.div`
  width: 50%;
  height: 100px;
  background-color: gray;
  margin-left: 30%;
  margin-top: 10px;
`;
