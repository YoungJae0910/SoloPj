import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addComments } from "../../redux/modules/coments";
import { v4 as uuid } from "uuid";
import axios from "axios";

export default function Coment() {
  // const dispatch = useDispatch();
  const [id, setId] = useState();
  const [passward, setPassward] = useState();
  const [contents, setContents] = useState();

  const idHandler = (event) => {
    setId(event.target.value);
  };
  const passwdHandler = (event) => {
    setPassward(event.target.value);
  };
  const contentsHandler = (event) => {
    setContents(event.target.value);
  };

  // const handleSubmitClick = (event) => {
  //   event.preventDefault();

  //   const newComment = {
  //     id,
  //     passward: uuid(),
  //     contents,
  //   };
  //   console.log(newComment);

  //   dispatch(addComments(newComment));
  //   setId("");
  //   setPassward("");
  //   setContents("");
  // };

  const newComment = {
    id: uuid(),
    passward,
    contents,
  };

  const addComment = async () => {
    console.log(newComment);
    await axios.post("http://localhost:3001/comment", newComment);
  };

  return (
    <WrapDiv>
      <UserInputDiv>
        <ComentText>댓글</ComentText>
        <ComentDiv>
          <UserInput
            type="text"
            placeholder="작성자"
            value={id}
            onChange={idHandler}
          />
          <UserInput
            type="text"
            placeholder="비밀번호"
            value={passward}
            onChange={passwdHandler}
          />
        </ComentDiv>
      </UserInputDiv>
      <ComentDiv>
        <ComentInput
          type="text"
          placeholder="내용을 입력하세요..."
          value={contents}
          onChange={contentsHandler}
        />
        <ComentBtn onClick={addComment}>Done..</ComentBtn>
      </ComentDiv>
    </WrapDiv>
  );
}

const WrapDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 30%;
`;

const UserInputDiv = styled.div`
  width: 100%;
  display: block;
  margin-top: 20px;
  gap: 10px;
`;

const UserInput = styled.input`
  width: 10%;
  height: 30px;
  border: 1.5px solid rgb(211, 211, 211);
  border-radius: 5px;
`;

const ComentDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  margin-top: 5px;
`;

const ComentInput = styled.input`
  width: 30%;
  height: 30px;
  border: 1.5px solid rgb(211, 211, 211);
  border-radius: 5px;
`;

const ComentBtn = styled.div`
  width: 6%;
  height: 33px;
  background-color: rgb(211, 211, 211);
  border: 1px solid rgb(211, 211, 211);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
`;

const ComentText = styled.div`
  width: 100px;
  font-size: 22px;
  font-weight: bold;
`;
