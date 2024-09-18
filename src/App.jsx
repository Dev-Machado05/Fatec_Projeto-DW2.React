import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import LoginPage from './Pages/LoginPage.jsx'
import SignUpPage from './Pages/SiginUpPage.jsx'

//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡶⢶⣾⠻⣦⡀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠋⠀⠀⠙⢶⡾⠃⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢾⡋⠀⠀⠀⢀⣴⠟⢷⣄⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠻⣦⣀⣴⠟⠁⠀⠀⠙⢷⣄⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠋⠀⣠⡾⠛⢷⡀⠀⠀⠀⠀⠀⠙⣷⣄⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠋⠀⣠⡾⠋⠀⠀⢸⡇⠀⠀⠀⠀⢀⣴⠏⣹⠇
//⠀⠀⠀⠀⠀⠀⣠⡾⠋⠀⣠⡾⠋⠀⠀⠀⠀⣼⠃⠀⠀⢀⣴⠟⢁⡼⠋⠀
//⠀⠀⠀⠀⣠⡾⠋⠀⣠⡾⠋⠀⠀⠀⠀⠀⣾⠃⢀⣤⠾⠋⣡⡶⠋⠀⠀⠀
//⠀⠀⣠⡾⠋⠀⣠⡾⠋⠀⠀⠀⠀⠀⠀⠀⠻⣾⣋⣡⡴⠟⠉⠀⠀⠀⠀⠀
//⢠⡾⠋⠀⣠⡾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀
//⠈⠻⣦⡾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀


const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage/>,
    },
    {
        path: "/Sign-up",
        element: <SignUpPage />,
    },
]);

export default function App() {
  return (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);