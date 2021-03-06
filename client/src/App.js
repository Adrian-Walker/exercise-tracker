import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar";
import ExerciseList from './components/ExerciseList'
import EditExercise from './components/EditExercise'
import CreateExercise from './components/CreateExercise'
import CreateUser from './components/CreateUser'
import Auth from "./components/Auth";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Routes>
          <Route path="/" element={<ExerciseList />} />
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/user" element={<CreateUser /> } />
          <Route path="/login" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  )
}
export default App
