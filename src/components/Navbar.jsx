import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbar">
        <div className="navbarBrand">
          <Link to="/FinalProject-CIJS96"><h1>ReactMovie</h1></Link>
        </div>
        <div className="navbarMain">
          <ul className="navbarList">
            <li className="navbarItem">
              <Link to="/FinalProject-CIJS96">Trang chủ</Link>
            </li>
            <li className="navbarItem">
              <Link to="/FinalProject-CIJS96/movies">Phim</Link>
            </li>
            <li className="navbarItem">
              <Link to="/FinalProject-CIJS96/news">Tin tức</Link>
            </li>
            <li className="navbarItem">
              <Link to="/FinalProject-CIJS96/promotion">Khuyến mãi</Link>
            </li>
            <li className="navbarItem">
              <Link to="/FinalProject-CIJS96/about">Giới thiệu</Link>
            </li>
          </ul>
        </div>
        <div className="navbarRight">
            <Link className="loginBtn" to="/FinalProject-CIJS96/login">Đăng nhập</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
