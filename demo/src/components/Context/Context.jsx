import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <Context.Provider
      value={{ openLogin, setOpenLogin, openSignup, setOpenSignup,show,setShow }}
    >
      {children}
    </Context.Provider>
  );
};
