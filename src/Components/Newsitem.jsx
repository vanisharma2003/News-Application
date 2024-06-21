const Newsitem = ({title,description,src,url}) => {
  return (
    <div className="card text-light bg-dark px-2 py-2 mt-5 mb-6 d-inline-block mx-5 my-5" style={{maxWidth:"345px"}}>
  <img src={src?src:"https://assets.gcore.pro/blog_containerizing_prod/uploads/2023/09/error-404-how-to-fix-it-fi.png"} style={{height:"200px",width:"325px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,120):"Information related to this particular news is not provided"}</p>
    <a href={url} className="btn btn-danger">Read more...</a>
  </div>
</div>
  )
}

export default Newsitem
