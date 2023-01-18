import React from "react";
import styled from "styled-components";

export default function MoreButton() {
  return <ButtonBtn>더보기</ButtonBtn>;
}

const ButtonBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 50px;
  background-color: black;
  color: white;
  border-radius: 5px;
  border: 1px solid black;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
`;
