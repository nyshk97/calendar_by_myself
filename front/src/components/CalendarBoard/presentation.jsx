import React from "react";
import { GridList } from "@material-ui/core";
import CalendarElement from "../CalendarElement";
import styled from "styled-components";

const days = ["日", "月", "火", "水", "木", "金", "土"];

const CalendarBoard = ({ calendar, month }) => {
  return (
    <Board>
      <GridList cols={7} spacing={0} cellHeight="auto">
        {days.map((d) => (
          <li className="days" key={d}>
            {d}
          </li>
        ))}
        {calendar.map((c) => (
          <li key={c.toISOString()}>
            <CalendarElement day={c} month={month} />
          </li>
        ))}
      </GridList>
    </Board>
  );
};

const Board = styled.div`
  margin: 20px auto;
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
  .days {
    text-align: center;
    box-sizing: border-box;
    border-right: 1px solid #ccc;
    padding-top: 10px;
  }
`;

export default CalendarBoard;
