import { Link, Tab, Tabs, Typography } from "@mui/material";
import { Box, getValue } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import MainTitle from "../MainTitle/MainTitle";
import MainCard from "./MainCard";
import MoreButton from "../Buttons/MoreButton";

export default function Menu({ childern }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 15, margin: 0, padding: 5 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <Warpdiv>
      <MainTitle>MENU</MainTitle>
      <Box sx={{ width: "100%" }}>
        {/* 메인페이지 항목별 탭 */}
        <Tabs centered value={value} onChange={handleChange}>
          <SizeTab label="ALL" {...a11yProps(0)} />
          <SizeTab label="SOJU" {...a11yProps(1)} />
          <SizeTab label="BEER" {...a11yProps(2)} />
          <SizeTab label="WHISKY" {...a11yProps(3)} />
          <SizeTab label="WINE" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <PanelDiv>
        <TabPanel value={value} index={0}>
          <MainCard />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MainCard categories="soju" />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <MainCard categories="beer" />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <MainCard categories="whisky" />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <MainCard categories="wine" />
        </TabPanel>
      </PanelDiv>
      <MoreButton />
      {/* 위 탭을 클릭시 해당아이탬을 랜더링 */}
    </Warpdiv>
  );
}

const Warpdiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 100%;
`;

const SizeTab = styled(Tab)`
  width: 180px;
`;

const PanelDiv = styled.div`
  width: 100%;
`;
