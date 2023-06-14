import { useAuth } from "../context/auth";
import { useCart } from "../context/cart";
import Jumbotron from "../components/cards/Jumbotron";
import { useNavigate } from "react-router-dom";
import UserCartSidebar from "../components/cards/UserCartSidebar";
import ProductCardHorizontal from "../components/cards/ProductCardHorizontal";

export default function Cart() {
  // context
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  // hooks
  const navigate = useNavigate();

  return (
    <>
      <Jumbotron
        title={`Xin chào ${auth?.token && auth?.user?.name}`}
        subTitle={
          cart?.length
            ? `Có ${cart.length} sản phẩm trong giỏ hàng. ${
                auth?.token ? "" : "Vui lòng đăng nhập để xác nhận đơn hàng!"
              }`
            : "Giỏ hàng trống"
        }
      />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="p-3 mt-2 mb-2 h4 bg-light text-center">
              {cart?.length ? (
                "Giỏ hàng của bạn"
              ) : (
                <div className="text-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate("/")}
                  >
                    Tiếp tục mua hàng
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>


        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                {cart?.map((p, index) => (
                  <ProductCardHorizontal key={index} p={p} />
                ))}
              </div>
            </div>

            {(cart.length!==0)?(<UserCartSidebar />):("")}
          </div>
        </div>
    </>
  );
}