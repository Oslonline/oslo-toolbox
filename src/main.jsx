import React from "react";
import ReactDOM from "react-dom/client";
import MainRouter from "./Routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <MainRouter />
    </React.StrictMode>,
);
