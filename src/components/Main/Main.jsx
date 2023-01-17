import { Link, Tab, Tabs, Typography } from "@mui/material";
import { Box, getValue } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import MainTitle from "../MainTitle/MainTitle";

export default function Menu({ childern }) {
  const [list, setList] = useState();
  const [value, setValue] = useState(0);

  const fetchALL = async () => {
    const { data } = await axios.get("http://localhost:3001/ALL");
    console.log(data);
    setList(data);
  };

  useEffect(() => {
    fetchALL();
  }, []);

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
          <SizeTab label="ITEM1" {...a11yProps(1)} />
          <SizeTab label="ITEM2" {...a11yProps(2)} />
          <SizeTab label="ITEM3" {...a11yProps(3)} />
          <SizeTab label="ITEM4" {...a11yProps(4)} />
        </Tabs>

        <TabPanel value={value} index={0}>
          all
        </TabPanel>
        <TabPanel value={value} index={1}>
          1
        </TabPanel>
        <TabPanel value={value} index={2}>
          2
        </TabPanel>
        <TabPanel value={value} index={3}>
          3
        </TabPanel>
        <TabPanel value={value} index={4}>
          4
        </TabPanel>
        {/* 위 탭을 클릭시 해당아이탬을 랜더링 */}
      </Box>
    </Warpdiv>
  );
}

const Warpdiv = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 1000px;
`;

const SizeTab = styled(Tab)`
  width: 180px;
`;
