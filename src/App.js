import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ExpensePage from "./pages/ExpensePage";
import Statistics from "./pages/Statistics";
import Profile from "./pages/Profile";
import "./App.css";

function App() {
  const navstyle = {
    border: "2px solid blue",
    padding: "8px",
  };
  const parentNav = {
    display: "flex",
    justifyContent: "space-around",
    borderBottom: "2px solid gray",
    width: "70%",
    margin: "0 auto",
    padding: "1rem",
  };
  return (
    <>
      <BrowserRouter>
        <div style={parentNav}>
          <Link style={navstyle}> Home </Link>
          <Link style={navstyle} to={"/expense"}>
            Expense
          </Link>
          <Link style={navstyle} to={"/statistics"}>
            Statistics
          </Link>
          <Link style={navstyle} to={"/profile"}>
            Profile
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expense" element={<ExpensePage />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
