import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="page home">
      <p className="label">TRANG CHỦ</p>
      <h1>Xin chào, mình là Gia Hân 👋</h1>
      <p>
        Mình là sinh viên năm 4 ngành Công nghệ Đa phương tiện.
      </p>
      <p><strong>
        Đây là trang web demo về React Router, nơi mình thực hành các kiến thức về routing trong React.
        </strong>
      </p> 
      <Link className="button" to="/about">
        Xem thêm về mình 🌸
      </Link>
    </section>
  )
}
