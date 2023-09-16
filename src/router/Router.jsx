// create router

import { createBrowserRouter } from "react-router-dom";
import privateRouter from "./privateRouter";
import publicRouter from "./publicRouter";
import commonRouter from "./commonRouter";

const router = createBrowserRouter([
  ...publicRouter,
  ...commonRouter,
  ...privateRouter,
]);

// export router
export default router;
