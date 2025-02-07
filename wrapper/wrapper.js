"use client";
import { persistor, store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from "redux-persist/integration/react";


const Wrapper = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="w-full h-svh relative ">
            {children}
            <ToastContainer position="bottom-left" />
          </div>
        </PersistGate>
      </Provider>
    </>
  );
};

export default Wrapper;
