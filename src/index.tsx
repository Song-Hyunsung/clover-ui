import ReactDOM from 'react-dom/client';
import './index.css';
import Landing from './Page/Landing/Landing';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MemberList from './Page/MemberList/MemberList';
import Login from './Page/Login/Login';
import LoginRedirect from './Page/Login/LoginRedirect';
import Forbidden from './Page/Login/Forbidden';
import React from 'react';

const router = createBrowserRouter([
  { path: "/", element: <Landing />},
  { path: "/member-list", element: <MemberList />},
  { path: "/login", children:[
    { index: true, element: <Login /> },
    { path: "redirect", element: <LoginRedirect /> }
  ]},
  { path: "/forbidden", element: <Forbidden /> }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
