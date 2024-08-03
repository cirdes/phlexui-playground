import React from "react";
import { Route, Routes } from "react-router-dom";


import Combobox from "./Pages/Combobox";
import Tooltip from "./Pages/Tooltip";
import Select from "./Pages/Select";


function Router() {

  return (
    <div className="flex flex-col items-center mt-72 gap-10" >
      <Routes>
        <Route path="shadcn/combobox" element={<Combobox />} />
        <Route path="shadcn/tooltip" element={<Tooltip />} />
        <Route path="shadcn/select" element={<Select />} />
      </Routes>
    </div >
  );
}

export default Router;
