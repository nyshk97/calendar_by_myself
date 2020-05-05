import React from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  DialogActions,
  Grid,
  Typography,
} from "@material-ui/core";
import { Close, LocationOnOutlined, NotesOutlined } from "@material-ui/icons";

const CurrentScheduleDialog = ({
  schedule: { item, isDialogOpen },
  closeDialog,
}) => {
  return (
    <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
      <DialogActions>
        <div>
          <IconButton onClick={closeDialog} size="small">
            <Close />
          </IconButton>
        </div>
      </DialogActions>

      <DialogContent>
        {item && (
          <>
            <div>
              <Grid
                container
                spacing={1}
                alignItems="center"
                justify="space-between"
              >
                <Grid item>
                  <span></span>
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography color="textSecondary">
                    {item.date.format("M月 D日")}
                  </Typography>
                </Grid>
              </Grid>
            </div>

            {item.location && (
              <Grid
                container
                spacing={1}
                alignItems="center"
                justify="space-between"
              >
                <Grid item>
                  <LocationOnOutlined />
                </Grid>
                <Grid item xs={10}>
                  <Typography>{item.location}</Typography>
                </Grid>
              </Grid>
            )}
            {item.description && (
              <Grid
                container
                spacing={1}
                alignItems="center"
                justify="space-between"
              >
                <Grid item>
                  <NotesOutlined />
                </Grid>
                <Grid item xs={10}>
                  <Typography>{item.description}</Typography>
                </Grid>
              </Grid>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CurrentScheduleDialog;
