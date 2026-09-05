// Home.jsx — trang chủ, URL "/"

import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <p className="eyebrow">Trang chủ</p>

      <h1 className="title">
        Điều hướng
        <br />
        <span className="title__accent">không tải lại trang</span>
      </h1>

      <p className="lede">
        Website demo React Router. Bấm các mục trên thanh điều hướng, chỉ phần
        nội dung trong khung này đổi — trình duyệt không tải lại trang.
      </p>

      <Link to="/about" className="cta">
        <span>Xem giới thiệu</span>
        <span className="cta__dot" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M5 12h13M12 5l7 7-7 7" />
          </svg>
        </span>
      </Link>
    </>
  );
}

export default Home;
