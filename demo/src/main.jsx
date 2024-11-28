import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Global.css"

import App from "./App.jsx";
import { ContextProvider } from "./components/Context/Context.jsx";
import { ToastContainer } from 'react-toastify';
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
    <ToastContainer/>
  </ContextProvider>
);
