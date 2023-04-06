import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';
import './index.css';
import loadReviewData from './utilities/loadReviewData';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[{
      path:"/",
      element:<Shop></Shop>
    },
  {
    path:"review",
    element:<OrderReview></OrderReview>,
    loader:loadReviewData
  },
  {
    path:"checkout",
    element:<div>Hi i am Payment checkOut</div>
  },
  {
    path:"inventory",
    element:<div>Hi i am Manage inventory</div>
  },
  {
    path:"login",
    element:<div>Hi i am Login</div>
  }
]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
