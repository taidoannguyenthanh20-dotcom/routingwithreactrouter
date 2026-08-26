import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="page">
      <div className="card">
        <div className="icon">🏠</div>
        <h1>Trang chủ</h1>
        <p>Chào mừng bạn đến với Demo Routing bằng React.</p>
        <Link className="button" to="/about">
          Khám phá →
        </Link>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <div className="card">
        <div className="icon">👨‍💻</div>
        <h1>Giới thiệu</h1>
        <p>
          Đây là trang giới thiệu được xây dựng bằng React Router.
        </p>
        <Link className="button" to="/contact">
          Liên hệ →
        </Link>
      </div>
    </div>
  );
}

function Contact() {
  return (
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