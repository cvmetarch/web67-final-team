import { useState } from "react";
import Jumbotron from "../../components/cards/Jumbotron";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  // state
  const [name, setName] = useState("Cyber 2");
  const [email, setEmail] = useState("cyber.hongky@gmail.com");
  const [password, setPassword] = useState("12345678");

  // hooks
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/register`, {
          name,
          email,
          password,
        }
      );
      console.log(data);
      if (data?.error) {
        toast.error(data.error);
      } else {
        localStorage.setItem("auth", JSON.stringify(data));
        setAuth({ ...auth, token: data.token, user: data.user });
        toast.success("Đăng ký thành công!");
        navigate("/dashboard/user");
      }
    } catch (err) {
      console.log(err);
      toast.error("Đăng ký chưa thành công! Hãy thử lại.");
    }
  };


  return (
    <div>
      <Jumbotron title="Đăng ký" />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control mb-4 p-2"
                placeholder="Họ và tên"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />

              <input
                type="email"
                className="form-control mb-4 p-2"
                placeholder="Địa chỉ Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                className="form-control mb-4 p-2"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="btn btn-primary" type="submit">
                Đăng ký
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <pre>{JSON.stringify(name, null, 4)}</pre> */}

    </div>
  );
}
