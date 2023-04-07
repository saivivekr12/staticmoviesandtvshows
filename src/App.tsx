import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/routes/Home";
import Movies from "./components/routes/Movies";
import TvShows from "./components/routes/TvShows";
import BookmarkMovies from "./components/routes/Bookmarks";
import SnackbarComponent from "./components/SnackbarCompo";
import useSearch from "./hooks/useSearch";
import data from "./data";
import { MoviesContext } from "./context/MoviesContext";
import { useContext, useEffect, useState } from "react";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { UserContext } from "./context/userContext";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const { handleClose } = useSearch(data);
  const { open, position, setPosition } = useContext(MoviesContext);

  useEffect(() => {
    console.log("app useeffect  was called", window.scrollY);
    setPosition(window.scrollY);
  }, [window.scrollY]);

  useEffect(() => {
    console.log("second useeeffect was called", position);
    window.scrollTo(0, position);
  }, [position, open]);

  return (
    <div className="App">
      <SnackbarComponent open={open} handleClose={handleClose} />
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route
          path="movies"
          element={
            <ProtectedRoutes>
              <Movies />
            </ProtectedRoutes>
          }
        />
        <Route
          path="tv-shows"
          element={
            <ProtectedRoutes>
              <TvShows />
            </ProtectedRoutes>
          }
        />
        <Route
          path="bookmarked"
          element={
            <ProtectedRoutes>
              <BookmarkMovies />
            </ProtectedRoutes>
          }
        />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
