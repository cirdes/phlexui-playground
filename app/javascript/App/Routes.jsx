import React from "react";
import { Route, Routes } from "react-router-dom";


import Combobox from "./Pages/Combobox";


function Router() {

  return (
    <Routes>
      <Route path="shadcn/combobox" element={<Combobox />} />
    </Routes>
  );
}

export default Router;
