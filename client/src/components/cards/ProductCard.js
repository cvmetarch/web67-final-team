// import moment from "moment";
import { Badge } from "antd";
import { useNavigate } from "react-router-dom";
// import viLocale from "moment/locale/vi";

export default function ProductCard({ p }) {
  const navigate = useNavigate();

return (
    <div className="card mb-3 hoverable">
        <img className="card-img-top"
            src={`${process.env.REACT_APP_API}/product/photo/${p._id}`}
            alt={p.name}
            style={{ height: "300px", objectFit: "cover" }}/>
        <div style={{ height: "24px"}}>
            <Badge.Ribbon text={`Đã bán ${p?.sold}`} color="red">
                <Badge.Ribbon
                    text={`${
                    p?.quantity >= 1
                        ? `${p?.quantity - p?.sold} sản phẩm có sẵn`
                        : "Hết hàng"
                    }`}
                    placement="start"
                    color="green"
                >
                </Badge.Ribbon>
            </Badge.Ribbon>
        </div>

      <div className="card-body">
        <h5>{p?.name}</h5>

        <h4 className="fw-bold">
          {p?.price?.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </h4>

        <p className="card-text">{p?.description?.substring(0, 60)}...</p>
      </div>

      <div className="d-flex justify-content-between">
        <button
          className="btn btn-primary col card-button"
          style={{ borderBottomLeftRadius: "5px" }}
          onClick={() => navigate(`/product/${p.slug}`)}
        >
          Chi tiết sản phẩm
        </button>

        <button
          className="btn btn-outline-primary col card-button"
          style={{ borderBottomRightRadius: "5px" }}
        >
          Thêm vào giỏ hàng
        </button>
      </div>

      {/*
        <p>{moment(p.createdAt).locale("vi", viLocale).fromNow()}</p>
        <p>{p.sold} lượt mua</p>
      */}
    </div>
  );
}