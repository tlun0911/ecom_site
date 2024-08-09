"use client";

import "../../app/globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export default function ToastProvider({ children }) {

  return (
    <div>
      {children}
      <ToastContainer autoClose={2000}  />
    </div>
  );
}