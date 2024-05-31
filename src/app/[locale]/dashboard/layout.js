"use client";
import SideBar from "@/components/dashboard/sidebar/SideBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../../scss/style.css";
import CustomRoute from "../CustomRoute/CustomRoute";

const Layout = ({ children }) => {
  return (
    <CustomRoute>
      <main className="min-h-screen flex  ">
        <SideBar />
        <ToastContainer />
        <section className="bg-secondary6 w-[100%] px-[24px]   ">
          {children}
        </section>
      </main>
    </CustomRoute>
  );
};

export default Layout;
