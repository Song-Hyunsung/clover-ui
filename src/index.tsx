import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Landing from './Page/Landing/Landing';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MemberList from './Page/MemberList/MemberList';

const router = createBrowserRouter([
  { path: "/", element: <Landing />},
  { path: "/member-list", element: <MemberList />}
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RouterProvider router={router}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
