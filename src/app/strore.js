import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import advisorsReducer from "../features/advisors/advisorSlice";
import programsReducer from "../features/programs/programSlice";
import blogsReducer from "../features/blogs/blogSlice";
import ecsReducer from "../features/ec/ecSlice";
import slidersReducer from "../features/slider/sliderSlice";
import subscriberReducer from "../features/subscriber/subscriberSlice";
import organizationsReducer from "../features/organizationForm/orgSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    advisors: advisorsReducer,
    programs: programsReducer,
    blogs : blogsReducer,
    ecs : ecsReducer,
    sliders : slidersReducer,
    subscriber : subscriberReducer,
    organization : organizationsReducer,
    // user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
  devTools: false,
});

export default store;
