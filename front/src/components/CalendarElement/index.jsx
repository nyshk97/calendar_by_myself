import React from "react";
import dayjs from "dayjs";
import { isSameDay, isFirstDay, isSameMonth } from "../../services/calendar";

const CalendarElement = ({ day }) => {
  const today = dayjs();
  const isCurrentMonth = isSameMonth(day, today);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";
  const format = isFirstDay(day) ? "M月D日" : "D";
  const isToday = isSameDay(day, today);
  return (
    <div>
      <span className={isToday ? "today" : ""}>{day.format(format)}</span>
    </div>
  );
};

export default CalendarElement;
