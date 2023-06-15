import { useSearch } from "../context/search";
import ProductCard from "../components/cards/ProductCard";
import Jumbotron from "../components/cards/Jumbotron";
import Footer from "../components/footer/Footer";

export default function Search() {
  const [values, setValues] = useSearch();

  return (
    <div style={{transform: "translateY(50px)"}}>
      <Jumbotron
        title="Kết quả tìm kiếm"
        subTitle={
          values?.results?.length < 1
            ? "Không tìm thấy sản phẩm. Vui lòng thử từ khóa khác!"
            : `Có ${values?.results?.length} sản phẩm`
        }
      />

      <div className="container mt-3">
        <div className="row col-md-8 mx-auto">
          {values?.results?.map((p) => (
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
