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
  AddEvents,
  Admin,
  Adminprivate,
  AdminSignup,
  Admission,
  AdmissionForms,
  ContactForm,
  Donate,
  Event,
  Events,
  Home,
  Legal,
  Login,
  Nopage,
  Privacy_Policy,
  // Private,
  Signup,
  Terms,
  UpdateEvent,
  Users,
} from "./components/index.js";
import { ClickProvider } from "./components/Context/AllAPIs.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<App />}>
        <Route path="/" element={<Home />} />
        {/* Private components */}
        {/* <Route element={<Private />}> */}
          <Route path="/about-us" element={<About />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/privacy-policy" element={<Privacy_Policy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/ruakshak-trust-events" element={<Events />} />
          <Route path="/legal-support" element={<Legal />} />
        {/* </Route> */}
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Route>
      {/* ADMIN DETAILS */}
      <Route path="/admin" element={<AdminSignup />} />
      {/* Admin Dashboard and details */}
      {/* <Route element={<Adminprivate />}> */}
        <Route path="/dashboard" element={<Admin />}>
          <Route index={true} element={<Nopage />} />
          <Route path="users" element={<Users />} />
          <Route path="contact-forms" element={<ContactForm />} />
          <Route path="admission-forms" element={<AdmissionForms />} />
          <Route path="events" element={<Event />}>
            <Route path="add-events" element={<AddEvents />} />
          </Route>
          <Route path="update-event/:id" element={<UpdateEvent />} />
        </Route>
      {/* </Route> */}
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
