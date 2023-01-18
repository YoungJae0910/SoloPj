import styled from "styled-components";
import React from "react";

export default function MainTitle({ children }) {
  return (
    <WrapDiv>
      <TitleText>{children}</TitleText>
    </WrapDiv>
  );
}

const WrapDiv = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled.div`
  font-size: 28px;
  font-weight: bold;
`;
