import { Routes, Route } from "react-router-dom";

import "./App.scss";
import MainLayout from "./Layout/MainLayout";
import Auth from "./pages/Auth/Auth";

function App() {

  return (
    <Routes>
      <Route index element={<MainLayout />} />
      <Route path="auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
