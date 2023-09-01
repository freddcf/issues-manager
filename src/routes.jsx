import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Repository from "./pages/Repository";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route
          exact
          path="/repository/:repository"
          element={<Repository />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
