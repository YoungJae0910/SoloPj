import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { axiosList } from "../../redux/modules/axiosSlice";
import { Dispatch, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function MainCard({ categories }) {
  const navigate = useNavigate(); //Parms 설정에대한
  const lists = useSelector((state) => {
    return state.axiosSlice.SOOL;
  });

  return (
    <div>
      {categories !== "all" ? (
        <Griddiv>
          {lists
            .filter((item) => item.categories === categories) //? optionalchaning
            .map((item) => {
              return (
                <WrapCarddiv
                  key={item.id}
                  onClick={() => {
                    navigate(`/menudetail/${item.id}`);
                  }}
                >
                  <MainCardImg src={item.img} alt="" />
                  <p>{item.name}</p>
                  <p>{item.title}</p>
                </WrapCarddiv>
              );
            })}
        </Griddiv>
      ) : (
        <Griddiv>
          {lists
            .filter((item) => item.categories !== categories) //? optionalchaning
            .map((item) => {
              return (
                <WrapCarddiv
                  key={item.id}
                  onClick={() => {
                    navigate(`/menudetail/${item.id}`);
                  }}
                >
                  <MainCardImg src={item.img} alt="" />
                  <p>{item.name}</p>
                  <p>{item.title}</p>
                </WrapCarddiv>
              );
            })}
        </Griddiv>
      )}
    </div>
  );
}

const WrapCarddiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 300px;
`;

const Griddiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 200px);
  gap: 30px;
  align-items: center;
  justify-content: center;
`;

const MainCardImg = styled.img`
  width: 200px;
  height: 220px;
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
