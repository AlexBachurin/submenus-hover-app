import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Submenu from "./components/Submenu";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Submenu />
      <Main />
    </>
  );
}

export default App;
