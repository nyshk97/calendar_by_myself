import React from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const Navigation = ({ setNextMonth, setPreviousMonth }) => {
  return (
    <Navi>
      <h1>カレンダー</h1>
      <IconButton onClick={setPreviousMonth}>
        <ArrowBackIos />
      </IconButton>
      <IconButton onClick={setNextMonth}>
        <ArrowForwardIos />
      </IconButton>
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
