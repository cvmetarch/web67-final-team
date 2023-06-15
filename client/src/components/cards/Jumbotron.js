export default function Jumbotron({
    title,
    subTitle,
  }) {
    return (
      <div
      className="container-fluid jumbotron d-flex justify-content-center align-items-center text-center"
      style={{ height: "200px" }}
    >
        <div>
          <h1 className="fw-bold">{title}</h1>
          <p className="lead">{subTitle}</p>
        </div>
      </div>
    );
  }
