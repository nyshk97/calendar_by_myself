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
import { Close } from "@material-ui/icons";
import { DatePicker } from "@material-ui/pickers";

const AddScheduleDialog = ({
  schedule: {
    form: { title, location, description, date },
    isDialogOpen,
  },
  closeDialog,
  setSchedule,
}) => {
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
          />
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
            onChange={(e) => setSchedule({ location: e })}
          />
        </div>
        <div className="row">
          <TextField
            placeholder="説明を追加"
            value={description}
            onChange={(e) => setSchedule({ description: e })}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button>保存</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddScheduleDialog;
