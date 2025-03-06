import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Dashboard from "./Components/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
import Contact from "./Components/Contact";  
import Product from "./Components/Product";  

// ✅ Define Routes Correctly
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/contact",
        element: <Contact />,  
      },
      {
        path: "/product",
        element: <Product />,  
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

// ✅ Render App Correctly
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />  {/* ✅ Fixed the empty router */}
  </React.StrictMode>
);

reportWebVitals();
