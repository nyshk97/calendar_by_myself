import React from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { DatePicker } from "@material-ui/pickers";

const Navigation = ({ setNextMonth, setPreviousMonth, setMonth, month }) => {
  return (
    <Navi>
      <h1>カレンダー</h1>
      <IconButton onClick={setPreviousMonth}>
        <ArrowBackIos />
      </IconButton>
      <IconButton onClick={setNextMonth}>
        <ArrowForwardIos />
      </IconButton>
      <DatePicker
        value={month}
        onChange={setMonth}
        variant="inline"
        format="YYYY年M月"
        animateYearScrolling
        disableToolbar
      />
    </Navi>
  );
};

const Navi = styled.div`
  display: flex;
  justify-content: center;
  h1 {
    display: inline-block;
    font-size: 22px;
  }
`;

export default Navigation;
