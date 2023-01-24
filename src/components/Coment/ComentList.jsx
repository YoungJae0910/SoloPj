import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { commentList } from "../../redux/modules/commentSlice";

export default function ComentList() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => {
    return state.commentSlice.comment;
  });

  useEffect(() => {
    dispatch(commentList());
  }, [dispatch]);

  // {categories !== "all" ? ():()}
  return (
    <div>
      {comments.map((item) => {
        console.log(typeof item.id);
        console.log(typeof item.passward);
        console.log(typeof item.contents);
        return (
          <WrapDiv>
            <div>{item.id}</div>
            <div>{item.contents}</div>
            <div>2023.1.20</div>
          </WrapDiv>
        );
      })}
    </div>
  );
}

const WrapDiv = styled.div`
  width: 50%;
  margin-left: 30%;
  margin-top: 10px;
`;
