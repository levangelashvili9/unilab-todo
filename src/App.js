import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";

function App() {
  const { isLoggedIn } = useSelector((state) => state.login);

  return (
    <Routes>
      <Route
        path="/"
        element={!isLoggedIn ? <WelcomePage /> : <Navigate to="/todo" />}
      />
      <Route
        path="/login"
        element={!isLoggedIn ? <LoginPage /> : <Navigate to="/todo" />}
      />
      <Route
        path="/todo"
        element={isLoggedIn ? <TodoPage /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;
