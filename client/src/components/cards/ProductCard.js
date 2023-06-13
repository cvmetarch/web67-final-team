import moment from "moment";
import viLocale from "moment/locale/vi";

export default function ProductCard({ p }) {
  return (
    <div className="card mb-3">
      <img
        src={`${process.env.REACT_APP_API}/product/photo/${p._id}`}
        alt={p.name}
        style={{ height: "300px", objectFit: "cover" }}
      />
      <p>{p.name}</p>
      <p>{moment(p.createdAt).locale("vi", viLocale).fromNow()}</p>
      <p>{p.sold} lượt mua</p>
    </div>
  );
}
