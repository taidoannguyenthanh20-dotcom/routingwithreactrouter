import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <h2>My Profile</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;  return (
    <div className="page">
      <div className="card">
        <div className="icon">📩</div>
        <h1>Liên hệ</h1>
        <p>Email: demo@example.com</p>
        <p>Điện thoại: 0123 456 789</p>
        <Link className="button" to="/">
          ← Trang chủ
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <header className="navbar">
        <div className="logo">My Demo</div>

        <nav>
          <Link to="/">Trang chủ</Link>
          <Link to="/about">Giới thiệu</Link>
          <Link to="/contact">Liên hệ</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
