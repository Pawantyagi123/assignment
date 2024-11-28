import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./Global.css"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { ContextProvider } from "./components/Context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
    <ToastContainer/>
  </ContextProvider>
);
