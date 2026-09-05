// About.jsx — trang giới thiệu, URL "/about"

function About() {
  return (
    <>
      <p className="eyebrow">Giới thiệu</p>

      <h1 className="title">
        Về trang
        <br />
        <span className="title__accent">này</span>
      </h1>

      <p className="lede">
        Đây là trang giới thiệu. Nội dung được render bởi component{" "}
        <code className="code">About.jsx</code>, khớp với đường dẫn{" "}
        <code className="code">/about</code>.
      </p>
    </>
  );
}

export default About;
