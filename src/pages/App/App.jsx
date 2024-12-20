import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { loadImages } from "./../../services/imageService";
import Home from "./../Home/Home";
import Login from "./../Login/Login";
import Admin from "./../Admin/Admin";
import Gallery from "./../Gallery/Gallery";
import ProtectedRoute from "./../../components/Admin/ProtectedRoute/ProtectedRoute";
import { DotLoader } from "react-spinners";
import TestPage from "../Test/TestPage";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  return isLoading ? (
    <div className="loader">
      <DotLoader
        cssOverride={{
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      />
    </div>
  ) : (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/gallery/:folder"
          element={<Gallery loadImages={loadImages} />}
        />
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
