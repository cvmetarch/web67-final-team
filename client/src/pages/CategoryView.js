import { useState, useEffect } from "react";
import Jumbotron from "../components/cards/Jumbotron";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../components/cards/ProductCard";
import Footer from "../components/footer/Footer";

export default function CategoryView() {
  // state
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState({});
  // hooks
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params?.slug) loadProductsByCatgory();
  }, [params?.slug]);

  const loadProductsByCatgory = async () => {
    try {
      const { data } = await axios.get(`/products-by-category/${params.slug}`);
      setCategory(data.category);
      setProducts(data.products);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{transform: "translateY(50px)"}}>
      <Jumbotron
        title={category?.name}
        subTitle={`${products?.length} sản phẩm`}
      />

      <div className="container-fluid">
        <div className="row col-md-8 mx-auto mt-3">
          {products?.map((p) => (
            <div key={p._id} className="col-md-4">
              <ProductCard p={p} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
