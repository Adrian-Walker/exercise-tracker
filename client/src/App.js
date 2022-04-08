import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <br />
      <Route path="/" component={ExerciseList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </Router>
  )
}
export default App
