import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <WarpDiv>
      <ImgDiv>
        <img src={logo} alt="" />
      </ImgDiv>
      <ButtonDiv>
        <ButtonBtn>Menu</ButtonBtn>
        <ButtonBtn>Borad</ButtonBtn>
      </ButtonDiv>
    </WarpDiv>
  );
}

const WarpDiv = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 50px;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 180px;
  height: 50px;
`;

const ButtonBtn = styled.button`
  width: 60px;
  height: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 20px;
`;
