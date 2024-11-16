import { configureStore } from "@reduxjs/toolkit";

import ui from "./ui";
import auth from "./auth";

const Store = configureStore({
  reducer: {
    ui: ui,
    auth: auth,
  },
});

export default Store;
