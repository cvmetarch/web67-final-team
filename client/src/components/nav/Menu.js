import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import Search from "../forms/Search";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import { FaShoppingBag } from "react-icons/fa";
import storeLogo from "../../images/logo.png";

export default function Menu() {
  // context
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  // hooks
  const categories = useCategory();
  const navigate = useNavigate();

  // console.log("categories in menu => ", categories);

  const logout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <div>
      <ul className=
      "nav d-flex w-100 position-fixed bg-light justify-content-between align-items-center"
      style={{zIndex:"1"}}
      >
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">
            <img
              src={storeLogo}
              alt="card-top"
              className="card-img-top"
              style={{ width: "150px", objectFit: "cover" }}
            />
          </NavLink>
        </li>

        <div className="dropdown">
          <li>
            <NavLink
              className="nav-link pointer dropdown-toggle"
              to="/articles"
            >
              CẨM NANG KIẾN THỨC
            </NavLink>

            <ul
              className="dropdown-menu"
              style={{ overflow: "auto" }}
            >
              <li>
                <NavLink className="nav-link" to="/articles/fengshui">
                  Kiến thức về Phong thủy
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/articles/buddhism">
                  Kiến thức về Phật giáo
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/articles/jewel">
                  Kiến thức về trang sức
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/articles/news">
                  Tin tức
                </NavLink>
              </li>

            </ul>
          </li>
        </div>

        <div className="dropdown">
          <li>
            <a
              className="nav-link pointer dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              DANH MỤC
            </a>

            <ul
              className="dropdown-menu"
              style={{ height: "180px", overflow: "auto" }}
            >
              <li>
                <NavLink className="nav-link" to="/categories">
                  Tất cả
                </NavLink>
              </li>

              {categories?.map((c) => (
                <li>
                  <NavLink className="nav-link" to={`/category/${c.slug}`}>
                    {c.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        </div>

        <li className="nav-item d-flex">
          <NavLink className="nav-link" aria-current="page" to="/shop">
            <b>CYBERSILVER MALL</b>
          </NavLink>
        </li>

        <Search />

        <li className="nav-item mt-1">
          <Badge
            count={cart?.length >= 1 ? cart.length : 0}
            offset={[-5, 11]}
            showZero={true}
          >
            <NavLink className="nav-link" aria-current="page" to="/cart">
              <FaShoppingBag />
            </NavLink>
          </Badge>
        </li>

        {!auth?.user ? (
        <div className="dropdown">
          <li>
              <NavLink
                className="nav-link"
                to="/login"
              >
                Đăng nhập
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="nav-link" to="/register">
                    Đăng ký
                  </NavLink>
                </li>
              </ul>
          </li>
        </div>
        ):(
          <div className="dropdown" style={{paddingRight:"0.5em",minWidth:"10em",textAlign:"right"}}>
            <li>
              <a
                className="nav-link pointer dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                {auth?.user?.name}
              </a>

              <ul className="dropdown-menu" style={{paddingRight:"0.5em", textAlign:"right"}}>
                <li>
                  <NavLink
                    className="nav-link"
                    to={`/dashboard/${
                      auth?.user?.role === 1 ? "admin" : "user"
                    }`}
                  >
                    Trang cá nhân
                  </NavLink>
                </li>

                <li className="nav-item pointer">
                  <a onClick={logout} className="nav-link">
                    Thoát
                  </a>
                </li>
              </ul>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
}
