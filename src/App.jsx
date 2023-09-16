import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/Router";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loggedInUser } from "./features/auth/authApiSlice";
import { getAuthData, setMessageEmpty } from "./features/auth/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loggedInUser());
  }, [dispatch]);

  const { message, error } = useSelector(getAuthData);
  // message or error show
  useEffect(() => {
    if (message === "Successfully Login.") {
      toast.success(message);
      dispatch(setMessageEmpty());
    }
  }, [message, error, dispatch]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      ></ToastContainer>
    </>
  );
}

export default App;
