import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

// components
import Login from "./Layout/components/Login";
import AdminPortal from "./Layout/pages/AdminPortal";

export default function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            {sessionStorage.getItem("auth-user") && <Route path="/admin/students" element={<AdminPortal/>}/>}
            <Route path="*" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
}
