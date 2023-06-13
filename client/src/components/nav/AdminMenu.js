import { NavLink } from "react-router-dom";

export default function AdminMenu() {
  return (
    <>
      <div className="p-3 mt-2 mb-2 h4 bg-light">Tính năng</div>

      <ul className="list-group list-unstyled">
        <li>
          <NavLink className="list-group-item" to="/dashboard/admin/category">
            Quản lý danh mục
          </NavLink>
        </li>

        <li>
          <NavLink className="list-group-item" to="/dashboard/admin/product">
            Thêm sản phẩm
          </NavLink>
        </li>

        <li>
          <NavLink className="list-group-item" to="/dashboard/admin/products">
            Danh sách sản phẩm
          </NavLink>
        </li>
      </ul>
    </>
  );
}
