import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'

import ProtectedRoutes from './components/ProtectedRoutes.jsx'
import LoginPage from './pages/LoginPage.jsx'
import VideoUpload from './pages/VideoUpload.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
      <Routes>
        <Route
          path="/upload"
          element={
          <ProtectedRoutes><VideoUpload /></ProtectedRoutes>
         }
        />

        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoutes><App /> </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
