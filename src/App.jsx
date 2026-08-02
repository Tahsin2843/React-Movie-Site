import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./CSS/App.css";
import NavBar from "./Components/Navbar";
import MovieCard from "./Components/MovieCard";
import Home from "./Pages/Home";
import Favorite from "./Pages/Favorites";
import { MovieProvider } from "./Contexts/MovieContext";

let movieNumber = 10;

export default function App() {
  return (
    <>
      <MovieProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorite />} />
          </Routes>
        </main>
      </MovieProvider>
    </>
  );
}
