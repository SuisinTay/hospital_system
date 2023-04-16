import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icons: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/products",
    icons: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Reports",
    path: "/reports",
    icons: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Operation Records",
    path: "/operation_records",
    icons: <FaIcons.FaHospitalUser />,
    cName: "nav-text",
  },
  {
    title: "Print for Patients",
    path: "/print_for_patients",
    icons: <AiIcons.AiFillPrinter />,
    cName: "nav-text",
  },
  {
    title: "Charges",
    path: "/charges",
    icons: <FaIcons.FaMoneyBill />,
    cName: "nav-text",
  },
];
