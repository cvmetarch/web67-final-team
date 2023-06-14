import useCategory from "../hooks/useCategory";
import Jumbotron from "../components/cards/Jumbotron";
import { Link } from "react-router-dom";

export default function CategoriesList() {
  const categories = useCategory();

  return (
    <>
      <Jumbotron title="Danh mục sản phẩm" subTitle="Welcome to CyberSilver" />

      <div className="container overflow-hidden">
        <div className="row gx-5 gy-5 mt-3 mb-5">
          {categories?.map((c) => (
            <div className="col-md-6" key={c._id}>
              <button className="btn btn-info col-9 p-3">
                <Link to={`/category/${c.slug}`} style={{ textDecoration: 'none' }}><b>{c.name}</b></Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
