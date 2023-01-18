import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Typography } from "@mui/material";

export default function MainCard({ categories }) {
  const [list, setList] = useState([]);
  console.log(list);

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
    <div>
      {categories !== "all" ? (
        <Griddiv>
          {list
            .filter((item) => item.categories === categories) //? optionalchaning
            .map((item) => {
              return (
                <WrapCarddiv>
                  <MainCardImg src={item.img} alt="" />
                  <p>{item.title}</p>
                  <p>{item.contents}</p>
                </WrapCarddiv>
              );
            })}
        </Griddiv>
      ) : (
        <Griddiv>
          {list
            .filter((item) => item.categories !== categories) //? optionalchaning
            .map((item) => {
              return (
                <WrapCarddiv>
                  <img src={item.img} alt="" />
                  <p>{item.title}</p>
                  <p>{item.contents}</p>
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
