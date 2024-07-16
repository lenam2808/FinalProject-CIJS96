import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbar">
        <div className="navbarBrand">
          <Link to="/"><h1>ReactMovie</h1></Link>
        </div>
        <div className="navbarMain">
          <ul className="navbarList">
            <li className="navbarItem">
              <Link to="/">Trang chủ</Link>
            </li>
            <li className="navbarItem">
              <Link to="/movies">Phim</Link>
            </li>
            <li className="navbarItem">
              <Link to="/news">Tin tức</Link>
            </li>
            <li className="navbarItem">
              <Link to="/promotion">Khuyến mãi</Link>
            </li>
            <li className="navbarItem">
              <Link to="/about">Giới thiệu</Link>
            </li>
          </ul>
        </div>
        <div className="navbarRight">
            <Link className="loginBtn" to="/login">Đăng nhập</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
