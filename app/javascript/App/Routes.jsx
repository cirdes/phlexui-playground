import React from "react";
import { Route, Routes } from "react-router-dom";


import Combobox from "./Pages/Combobox";
import Tooltip from "./Pages/Tooltip";


function Router() {

  return (
    <div className="flex flex-col items-center mt-72 gap-10" >
      <Routes>
        <Route path="shadcn/combobox" element={<Combobox />} />
        <Route path="shadcn/tooltip" element={<Tooltip />} />
      </Routes>
    </div >
  );
}

export default Router;
