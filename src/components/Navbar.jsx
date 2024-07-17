import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const usernamePart = user.username.split("@")[0];

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/FinalProject-CIJS96/login");
  };
  return (
    <div className="navbarContainer">
      <div className="navbar">
        <div className="navbarBrand">
          <Link to="/FinalProject-CIJS96/">
            <h1>ReactMovie</h1>
          </Link>
        </div>
        <div className="navbarMain">
          <ul className="navbarList">
            <li className="navbarItem">
              <Link to="/FinalProject-CIJS96/">Trang chủ</Link>
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
          <p className="userName">{usernamePart}</p>
          <Link
            className="loginBtn"
            onClick={logout}
            to="/FinalProject-CIJS96/login"
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
