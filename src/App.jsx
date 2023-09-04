import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Admin from "../pages/admin/Admin";
import User from "../pages/user/User";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="admin" element={<Admin />} />

          <Route path="user" element={<User />} />

          <Route path="registracija" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
