import { NavLink } from "react-router-dom";

export default function UserMenu() {
  return (
    <>
      <div className="p-3 mt-2 mb-2 h4 bg-light">Tùy chỉnh</div>

      <ul className="list-group list-unstyled">
        <li>
          <NavLink className="list-group-item" to="/dashboard/user/profile">
            Thông tin cá nhân
          </NavLink>
        </li>

        <li>
          <NavLink className="list-group-item" to="/dashboard/user/orders">
            Thông tin đơn hàng
          </NavLink>
        </li>
      </ul>
    </>
  );
}
