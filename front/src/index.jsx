import React from "react";
import ReactDOM from "react-dom";
import CalendarBoard from "./components/CalendarBoard/container";
import Navigation from "./components/Navigation/container";
import AddScheduleDialog from "./components/AddScheduleDialog/container";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/rootReducer";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import CurrentScheduleDialog from "./components/CurrentScheduleDialog/container";
dayjs.locale("ja");

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Navigation />
      <CalendarBoard />
      <AddScheduleDialog />
      <CurrentScheduleDialog />
    </MuiPickersUtilsProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
