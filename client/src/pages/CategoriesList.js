import useCategory from "../hooks/useCategory";
import Jumbotron from "../components/cards/Jumbotron";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";

export default function CategoriesList() {
  const categories = useCategory();

  return (
    <div style={{transform: "translateY(50px)"}}>
      <Jumbotron title="Danh mục sản phẩm" subTitle="Welcome to CyberSilver" />

      <div className="container overflow-hidden">
        <div className="row col-md-8 m-auto gx-4 gy-4 mb-5">
          {categories?.map((c) => (
            <div className="col-md-6" key={c._id}>
              <button className="btn btn-info col-12 p-3">
                <Link to={`/category/${c.slug}`} style={{ textDecoration: 'none' }}><b>{c.name}</b></Link>
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
