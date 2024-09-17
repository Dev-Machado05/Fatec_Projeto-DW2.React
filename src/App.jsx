import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import LoginPage from './Pages/LoginPage.jsx'

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
]);

export default function App() {
  return (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);