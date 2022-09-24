import { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TodoList from "./pages/TodoList";
import PokeAPI from "./pages/PokeAPI";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PokeAPI" element={<PokeAPI />} />
          <Route path="/TodoList" element={<TodoList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
