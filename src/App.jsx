import "./App.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import MainLayout from "./components/MainLayout";
import SignIn from "./components/SignIn";
import TaskList from "./components/TaskList";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";
function App() {
  const ctx = useContext(AuthContext);
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" exact element={<Hero />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/tasklist" element={<TaskList />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
