import { Routes, Route } from "react-router-dom";

import "./App.scss";
import MainLayout from "./layout/MainLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/LoginPage/SignupPage";

function App() {

  return (
    <Routes>
      <Route path="/*" element={<MainLayout />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
    </Routes>
  );
}

export default App;
