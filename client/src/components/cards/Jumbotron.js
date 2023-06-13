export default function Jumbotron({
    title,
    subTitle,
  }) {
    return (
      <div className="container-fluid jumbotron">
        <div className="row" style={{height:"100%"}}>
          <div className="col text-center p-5 m-auto">
            <h1 className="fw-bold">{title}</h1>
            <p className="lead">{subTitle}</p>
          </div>
        </div>
      </div>
    );
  }
