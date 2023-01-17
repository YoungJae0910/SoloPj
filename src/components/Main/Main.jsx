import { Tab, Tabs } from "@mui/material";
import React from "react";
import styled from "styled-components";

export default function Menu() {
  return (
    <Warpdiv>
      {/* 메인페이지 항목별 탭 */}
      <Tabs centered variant="fullWidth">
        <Tab label="ALL" />
        <Tab label="ITEM1" />
        <Tab label="ITEM2" />
        <Tab label="ITEM3" />
        <Tab label="ITEM4" />
      </Tabs>

      {/* 위 탭을 클릭시 해당아이탬을 랜더링 */}
    </Warpdiv>
  );
}

const Warpdiv = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 1000px;
`;
