import React from "react"; 
import { Route, Routes } from "react-router";
import App from "../App.jsx";
import VideoUpload from "../components/VideoUpload";


const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/upload" element={<VideoUpload/>}/>
            <Route path="" element/>
            <Route/>
        </Routes>
    );
};