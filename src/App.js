import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div className="app-container">
        <style>{`
          .app-container {
            display: flex;
            min-height: 100vh;
            font-family: sans-serif;
          }
          .sidebar {
            width: 220px;
            background-color: #ffffff;
            padding: 20px;
            border-right: 1px solid #e5e5e5;
            display: flex;
            flex-direction: column;
          }
          .sidebar-title {
            font-weight: bold;
            font-size: 20px;
            margin-bottom: 40px;
          }
          .sidebar-nav {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .sidebar-link {
            text-decoration: none;
            color: #333;
            font-size: 16px;
            padding: 6px 10px;
            border-radius: 5px;
            transition: background-color 0.2s;
          }
          .sidebar-link:hover {
            background-color: #f0f0f0;
          }
          .logout-button {
            background-color: transparent;
            border: none;
            color: #f44336;
            font-size: 16px;
            cursor: pointer;
            margin-top: auto;
            padding-top: 40px;
          }
          .main-content {
            flex: 1;
            padding: 30px;
            background-color: #f9f9f9;
          }
        `}</style>

        <aside className="sidebar">
          <h2 className="sidebar-title">Ahasa Dashboard</h2>
          <nav className="sidebar-nav">
            <Link to="/" className="sidebar-link">Dashboard</Link>
            <Link to="/upload-document" className="sidebar-link">Upload Document</Link>
            
            <button className="logout-button">Logout</button>
          </nav>
        </aside>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            {/* Add other routes here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
