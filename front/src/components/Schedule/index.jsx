import React from "react";
import styled from "styled-components";

const Schedule = ({ schedule }) => {
  console.log(schedule);
  return <ScheduleItem>{schedule.title}</ScheduleItem>;
};

const ScheduleItem = styled.div`
  width: 90%;
  background-color: rgb(121, 134, 203);
  color: #fff;
  border-radius: 4px;
  font-size: 14px;
  padding: 1px 4px;
  margin: 1px auto;
  cursor: pointer;
`;

export default Schedule;
