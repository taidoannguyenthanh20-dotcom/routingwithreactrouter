import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import mark from "./assets/hero.png";
import "./App.css";

const NAV = [
  { to: "/", label: "Trang chủ" },
  { to: "/about", label: "Giới thiệu" },
  { to: "/contact", label: "Liên hệ" },
];

const SOCIAL = [
  { id: "github-icon", label: "GitHub" },
  { id: "x-icon", label: "X" },
  { id: "discord-icon", label: "Discord" },
];

// ---------------------------------------------------------------- Header

function Header() {
  return (
    <header className="header">
      {/* Link ở logo: bấm vào quay về trang chủ */}
      <Link to="/" className="brand" aria-label="My Profile — trang chủ">
        <span className="brand__mark">
          <img src={mark} alt="" />
        </span>
        <span className="brand__text">My&nbsp;Profile</span>
      </Link>

      <div className="navshell">
        <nav className="nav" aria-label="Điều hướng chính">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              // end: chỉ active khi URL đúng bằng "/".
              // Không có thì "/" active ở mọi trang, vì mọi URL đều bắt đầu bằng "/".
              end={item.to === "/"}
              className="nav__link"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

// ---------------------------------------------------------------- Footer

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Bài tập React Router — 2026</p>
      <ul className="social">
        {SOCIAL.map((item) => (
          <li key={item.id}>
            <a
              className="social__link"
              href="#"
              aria-label={item.label}
              onClick={(e) => e.preventDefault()}
            >
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <use href={`/icons.svg#${item.id}`} />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

// ---------------------------------------------------------------- Khung layout

function Shell() {
  const { pathname } = useLocation();

  return (
    <div className="shell">
      <Header />

      <main className="stage">
        <div className="panel">
          <div className="panel__inner" key={pathname}>
            {/* Routes so URL hiện tại với từng Route, render cái khớp */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              {/* path="*" khớp mọi URL không trùng các Route ở trên */}
              <Route
                path="*"
                element={
                  <>
                    <p className="eyebrow">Lỗi 404</p>
                    <h1 className="title">Không tìm thấy trang</h1>
                    <p className="lede">
                      Đường dẫn bạn mở không tồn tại trong website này.
                    </p>
                    <Link to="/" className="cta">
                      <span>Về trang chủ</span>
                      <span className="cta__dot" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                          <path d="M5 12h13M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                  </>
                }
              />
            </Routes>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// ---------------------------------------------------------------- App

function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}

export default App;
