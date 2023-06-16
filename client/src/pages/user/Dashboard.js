import { useAuth } from "../../context/auth";
import Jumbotron from "../../components/cards/Jumbotron";
import UserMenu from "../../components/nav/UserMenu";

export default function Dashboard() {
  // context
  const [auth, setAuth] = useAuth();

  return (
    <div style={{transform: "translateY(50px)"}}>
      <Jumbotron title={`Xin chào ${auth?.user?.name}`} subTitle="Trang cá nhân" />

      <div className="container-fluid">
        <div className="row col-md-8 mx-auto">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="p-3 mt-2 mb-2 h4 bg-light">Thông tin Quý khách</div>

            <ul className="list-group">
              <li className="list-group-item">{auth?.user?.name}</li>
              <li className="list-group-item">{auth?.user?.email}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
