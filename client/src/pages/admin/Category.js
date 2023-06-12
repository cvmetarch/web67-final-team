import { useState } from "react";
import { useAuth } from "../../context/auth";
import Jumbotron from "../../components/cards/Jumbotron";
import AdminMenu from "../../components/nav/AdminMenu";
import axios from "axios";
import toast from "react-hot-toast";

export default function AdminCategory() {
  // context
  const [auth, setAuth] = useAuth();
  // state
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/category", { name });
      if (data?.error) {
        toast.error(data.error);
      } else {
        setName("");
        toast.success(`"${data.name}" đã được khởi tạo!`);
      }
    } catch (err) {
      console.log(err);
      toast.error("Tạo danh mục chưa thành công. Hãy thử lại!");
    }
  };

  return (
    <>
      <Jumbotron
        title={`Hello ${auth?.user?.name}`}
        subTitle="Trang quản trị"
      />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="p-3 mt-2 mb-2 h4 bg-light">Thêm danh mục</div>

            <div className="p-3">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Tên danh mục"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button className="btn btn-primary mt-3">Tạo</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
