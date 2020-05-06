import React from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Input,
  IconButton,
} from "@material-ui/core";
import styled from "styled-components";
import { Close } from "@material-ui/icons";
import { DatePicker } from "@material-ui/pickers";

const AddScheduleDialog = ({
  schedule: {
    form: { title, location, description, date },
    isDialogOpen,
    isStartEdit,
  },
  closeDialog,
  setSchedule,
  saveSchedule,
  setIsEditStart,
}) => {
  const isTitleInvalid = !title && isStartEdit;
  return (
    <Dialog open={isDialogOpen} onClose={closeDialog}>
      <DialogActions>
        <IconButton onClick={closeDialog} size="small">
          <Close />
        </IconButton>
      </DialogActions>
      <DialogContent>
        <div className="row">
          <Input
            autoFocus
            placeholder="タイトルと日時を追加"
            value={title}
            onChange={(e) => setSchedule({ title: e.target.value })}
            onBlur={setIsEditStart}
            error={isTitleInvalid}
          />
          <div className="err">
            {isTitleInvalid && <Err>タイトルは必須です</Err>}
          </div>
        </div>
        <div className="row">
          <DatePicker
            value={date}
            onChange={(d) => setSchedule({ date: d })}
            variant="inline"
            disableToolbar
          />
        </div>
        <div className="row">
          <TextField
            placeholder="場所を追加"
            value={location}
            onChange={(e) => setSchedule({ location: e.target.value })}
          />
        </div>
        <div className="row">
          <TextField
            placeholder="説明を追加"
            value={description}
            onChange={(e) => setSchedule({ description: e.target.value })}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={saveSchedule}>保存</Button>
      </DialogActions>
    </Dialog>
  );
};

const Err = styled.div`
  color: red;
  font-size: 12px;
`;

export default AddScheduleDialog;
