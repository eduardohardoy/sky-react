import React from "react";
import ReactDOM from "react-dom/client";
import HelpSearch from "./pages/HelpSearch";
import "./styles.css";

const App = () => {
  return (
    <div>
      <HelpSearch />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
