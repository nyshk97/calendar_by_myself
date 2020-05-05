import React from "react";
import dayjs from "dayjs";
import {
  isSameDay,
  isFirstDay,
  isSameMonth,
  getMonth,
} from "../../services/calendar";
import styled from "styled-components";
import Schedule from "../Schedule";

const CalendarElement = ({ day, month, schedules, onClickSchedule }) => {
  const today = dayjs();
  const currentMonth = getMonth(month);
  const isCurrentMonth = isSameMonth(day, currentMonth);
  const format = isFirstDay(day) ? "M月D日" : "D";
  const isToday = isSameDay(day, today);
  return (
    <Block>
      <span
        className={
          (isToday ? "today" : "") +
          " " +
          (isCurrentMonth ? "current_month" : "")
        }
      >
        {day.format(format)}
      </span>
      <div>
        {schedules.map((e) => (
          <Schedule key={e.id} schedule={e} onClickSchedule={onClickSchedule} />
        ))}
      </div>
    </Block>
  );
};

const Block = styled.div`
  color: #aaa;
  text-align: center;
  height: 18vh;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  .current_month {
    color: #333;
  }
  .today {
    display: inline-block;
    line-height: 24px;
    width: 24px;
    background-color: #1a73e8;
    color: #fff;
    border-radius: 50%;
  }
`;

export default CalendarElement;
