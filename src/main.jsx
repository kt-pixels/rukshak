import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  About,
  Admission,
  Donate,
  Events,
  Home,
  Login,
  Privacy_Policy,
  Signup,
  Terms,
} from "./components/index.js";
import { ClickProvider } from "./components/Context/AllAPIs.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/privacy-policy" element={<Privacy_Policy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/ruakshak-trust-events" element={<Events />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClickProvider>
      <RouterProvider router={router} />
    </ClickProvider>
  </React.StrictMode>
);
