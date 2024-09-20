import React from "react";
import ReactDOM from "react-dom/client"; // Sử dụng 'react-dom/client' thay vì 'react-dom'
import App from "./App.jsx";
import store from "./redux/store.jsx";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root")); // Tạo root element
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
