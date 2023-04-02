import { Routes, Route } from "react-router-dom";

import "./App.scss";
import MainLayout from "./layout/MainLayout";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {

  return (
    <Routes>
      <Route path="/*" element={<MainLayout />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
