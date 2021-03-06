import React, { useEffect } from "react";
import { GridList } from "@material-ui/core";
import CalendarElement from "../CalendarElement";
import styled from "styled-components";

const days = ["日", "月", "火", "水", "木", "金", "土"];

const CalendarBoard = ({
  calendar,
  month,
  openAddScheduleDialog,
  openCurrentScheduleDialog,
  fetchSchedule,
}) => {
  useEffect(() => {
    fetchSchedule();
  }, []);
  return (
    <Board>
      <GridList cols={7} spacing={0} cellHeight="auto">
        {days.map((d) => (
          <li className="days" key={d}>
            {d}
          </li>
        ))}
        {calendar.map(({ date, schedules }) => (
          <li
            key={date.toISOString()}
            onClick={() => openAddScheduleDialog(date)}
          >
            <CalendarElement
              day={date}
              month={month}
              schedules={schedules}
              onClickSchedule={openCurrentScheduleDialog}
            />
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
