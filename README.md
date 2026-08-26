1. Mục tiêu
Sinh viên thực hành xây dựng một website React đơn giản sử dụng React Router để điều hướng giữa các trang.
Sau khi hoàn thành, sinh viên cần biết cách:
Tạo project React bằng Vite.
Tạo các React Component.
Cài đặt và sử dụng react-router-dom.
Sử dụng BrowserRouter, Routes, Route, Link.
Tạo nhiều trang trong một ứng dụng React.
Sử dụng CSS để thiết kế giao diện.
Sử dụng Git và GitHub để nộp bài.
2. Đề bài
Hãy xây dựng một website "My Profile" bằng React.
Website phải có 3 trang chính:
Trang	URL	Component
Trang chủ	/	Home.jsx
Giới thiệu	/about	About.jsx
Liên hệ	/contact	Contact.jsx
3.Yêu cầu React Router
Sinh viên bắt buộc sử dụng React Router.
Trong App.jsx phải sử dụng:
BrowserRouter
Routes
Route
Link
Ví dụ cấu trúc:
<BrowserRouter>
  <nav>
    <Link to="/">Trang chủ</Link>
    <Link to="/about">Giới thiệu</Link>
    <Link to="/contact">Liên hệ</Link>
  </nav>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>
4.Tổ chức thư mục
Khuyến khích sinh viên tổ chức project như sau:
my-profile/
│
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── public/
├── .gitignore
├── package.json
├── package-lock.json
├── index.html
└── README.md
5.
