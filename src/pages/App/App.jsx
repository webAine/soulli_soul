import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { loadImages } from './../../services/imageService';
import Home from "./../Home/Home";
import Login from "./../Login/Login";
import Admin from "./../Admin/Admin";
import Gallery from "./../Gallery/Gallery";
import ProtectedRoute from "./../../components/Admin/ProtectedRoute/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gallery/:folder" element={<Gallery loadImages={loadImages} />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
