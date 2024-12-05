import image from '../assets/logo.webp'

const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "345px", height: "100%"}}>
      <img src={src ? src : image} style={{height: "200px", width: "330px"}} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "Breaking News"}</p>
        <a href={url} className="btn btn-danger mt-auto">Read More</a>
      </div>
    </div>
  );
}

export default NewsItem;
