import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import Charges from "./routes/Charges";
import Home from "./routes/Home";
import OperationRecords from "./routes/OperationRecords";
import PrintForPatients from "./routes/PrintForPatients";
import Products from "./routes/Products";
import Reports from "./routes/Reports";
import Navbar from "./components/Navbar";
import "./App.css";

const AppLayout = () => (
  <React.Fragment>
    <Navbar />
    <Outlet />
  </React.Fragment>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/print_for_patients" element={<PrintForPatients />} />
      <Route path="/operation_records" element={<OperationRecords />} />
      <Route path="/charges" element={<Charges />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
