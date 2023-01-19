import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { axiosList } from "../../redux/modules/axiosSlice";
import { Dispatch, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function MainCard({ categories }) {
  const dispatch = useDispatch();
  const lists = useSelector((state) => {
    return state.axiosSlice.SOOL;
  });

  useEffect(() => {
    dispatch(axiosList());
  }, [dispatch]);

  return (
    <div>
      {categories !== "all" ? (
        <Griddiv>
          {lists
            .filter((item) => item.categories === categories) //? optionalchaning
            .map((item) => {
              return (
                <StyleLink to={"/menudetails"}>
                  <WrapCarddiv key={item.id}>
                    <MainCardImg src={item.img} alt="" />
                    <p>{item.title}</p>
                    <p>{item.contents}</p>
                  </WrapCarddiv>
                </StyleLink>
              );
            })}
        </Griddiv>
      ) : (
        <Griddiv>
          {lists
            .filter((item) => item.categories !== categories) //? optionalchaning
            .map((item) => {
              return (
                <StyleLink to={"/menudetails"}>
                  <WrapCarddiv key={item.id}>
                    <MainCardImg src={item.img} alt="" />
                    <p>{item.title}</p>
                    <p>{item.contents}</p>
                  </WrapCarddiv>
                </StyleLink>
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
