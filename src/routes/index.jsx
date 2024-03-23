// import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/login";
import Register from "../pages/register";
import Notes from "../pages/notes";
import Archived from "../pages/archive";
import FormInputNotes from "../pages/formInputNotes";
import NoteDetail from "../pages/noteDetail";
import PrivateRoute from "./PrivateRoute";
import { ThemeProvider } from "../components/ThemeContext/ThemeProvider";

export const AppRoutes = () => {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<PrivateRoute element={<Notes />} />} />
        <Route
          path="/form-input/*"
          element={<PrivateRoute element={<FormInputNotes />} />}
        />
        <Route
          path="/archived/*"
          element={<PrivateRoute element={<Archived />} />}
        />
        <Route
          path="/notes/:id"
          element={<PrivateRoute element={<NoteDetail />} />}
        />
      </Routes>
    </ThemeProvider>
  );
};
