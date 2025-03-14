import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import LessonDetail from "./pages/LessonDetail";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bai-hoc/:id" element={<LessonDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
