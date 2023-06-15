import { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import Jumbotron from "../components/cards/Jumbotron";
import { useParams } from "react-router-dom";
import { Badge } from "antd";
import {
  FaMoneyBill,
  FaProjectDiagram,
  FaRegClock,
  FaCheck,
  FaTimes,
  FaWarehouse,
  FaRocket,
} from "react-icons/fa";
import ProductCard from "../components/cards/ProductCard";
import toast from "react-hot-toast";
import { useCart } from "../context/cart";
import viLocale from "moment/locale/vi";
import Footer from "../components/footer/Footer";

export default function ProductView() {
  // context
  const [cart, setCart] = useCart();
  // state
  const [product, setProduct] = useState({});
  const [related, setRelated] = useState([]);
  // hooks
  const params = useParams();

  useEffect(() => {
    if (params?.slug) loadProduct();
  }, [params?.slug]);

  const loadProduct = async (req, res) => {
    try {
      const { data } = await axios.get(`/product/${params.slug}`);
      setProduct(data);
      loadRelated(data._id, data.category._id);
    } catch (err) {
      console.log(err);
    }
  };

  const loadRelated = async (productId, categoryId) => {
    try {
      const { data } = await axios.get(
        `/related-products/${productId}/${categoryId}`
      );
      setRelated(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{transform: "translateY(50px)"}}>
      <Jumbotron title="CyberSilver Store - Bạc Thái & Vàng phong thủy" subTitle="Chi tiết sản phẩm"/>
      <div className="container-fluid">
        <div className="row col-md-8 mx-auto mt-3">
          <div className="card col-md-9 mb-3 hoverable">
            <Badge.Ribbon text={`Đã bán ${product?.sold}`} color="red">
              <Badge.Ribbon
                text={`${
                  product?.quantity >= 1
                    ? `${product?.quantity - product?.sold} sản phẩm có sẵn`
                    : "Hết hàng"
                }`}
                placement="start"
                color="green"
              >
                <img
                  className="card-img-top"
                  src={`${process.env.REACT_APP_API}/product/photo/${product._id}`}
                  alt={product.name}
                  style={{ height: "500px", width: "100%", objectFit: "cover" }}
                />
              </Badge.Ribbon>
            </Badge.Ribbon>

            <div className="card-body">
              <h1 className="fw-bold">{product?.name}</h1>
              <p className="card-text lead">{product?.description}</p>
            </div>

            <div className="d-flex justify-content-between lead p-5 bg-light fw-bold">
              <div>
                <p>
                  <FaMoneyBill /> {" "}
                  {((product?.price)*1000)?.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>

                <p>
                  <FaProjectDiagram /> {product?.category?.name}
                </p>

                <p>
                  <FaRegClock /> Đã thêm vào {moment(product.createdAt).locale("vi", viLocale).fromNow()}
                </p>

                <p>
                  {product?.quantity > 0 ? <FaCheck /> : <FaTimes />}{" "}
                  {product?.quantity > 0 ? "Còn" : "Hết"} hàng
                </p>

                <p>
                  <FaWarehouse /> {product?.quantity - product?.sold} sản phẩm có sẵn
                </p>

                <p>
                  <FaRocket /> Đã bán {product.sold}
                </p>
              </div>
            </div>

            <button
              className="btn btn-outline-primary col card-button"
              style={{
                borderBottomRightRadius: "5px",
                borderBottomLeftRadius: "5px",
              }}
              onClick={() => {
                setCart([...cart, product]);
                toast.success("Đã thêm vào giỏ hàng!");
              }}
            >
              Thêm vào giỏ hàng
            </button>
          </div>
          <div className="col-md-3">
            <h2>Sản phẩm liên quan</h2>
            <hr />
            {related?.length < 1 && <p>Chưa tìm thấy</p>}
            {related?.map((p) => (
              <ProductCard p={p} key={p._id} />
            ))}
          </div>
        </div>
      </div>
    <Footer />
    </div>
  );
}
