import { useAuth } from "../../context/auth";
import Jumbotron from "../../components/cards/Jumbotron";
import AdminMenu from "../../components/nav/AdminMenu";
import Footer from "../../components/footer/Footer";

export default function AdminDashboard() {
  // context
  const [auth, setAuth] = useAuth();

  return (
    <div style={{transform: "translateY(50px)"}}>
      <Jumbotron
        title={`Xin chào ${auth?.user?.name}`}
        subTitle="Trang quản trị"
      />
      <div className="container-fluid" style={{marginBottom:"10px"}}>
        <div className="row col-md-8 mx-auto">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="p-3 mt-2 mb-2 h4 bg-light">Thông tin quản trị viên</div>
            <ul className="list-group">
              <li className="list-group-item">{auth?.user?.name}</li>
              <li className="list-group-item">{auth?.user?.email}</li>
              <li className="list-group-item" style={{color:"red"}}>Admin</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
