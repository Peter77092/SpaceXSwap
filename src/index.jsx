import React from "react";
import ReactDOM from "react-dom/client";
// import {Root} from '@/components/Root.jsx';

import "./index.css";
import { DataProvider } from "@/components/Context.jsx";
import { App } from "./components/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      {/* <Root/> */}
      <App />
    </DataProvider>
  </React.StrictMode>
);
