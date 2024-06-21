import React from 'react'

const Navbar = ({setCategory}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
   <h1 className='badge bg-danger fs-3'>Flash Feed</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
       
        <li className="nav-item">
          <div className="nav-link text-white fs-4 mx-4" onClick={()=>setCategory("general")} style={{cursor:'pointer'}}>General</div>
        </li>
        <li className="nav-item">
          <div className="nav-link text-white fs-4 mx-4" onClick={()=>setCategory("world")} style={{cursor:'pointer'}}>World</div>
        </li>
        <li className="nav-item">
          <div className="nav-link text-white fs-4 mx-4" onClick={()=>setCategory("nation")} style={{cursor:'pointer'}}>Nation</div>
        </li>
        <li className="nav-item">
          <div className="nav-link text-white fs-4 mx-4" onClick={()=>setCategory("business")} style={{cursor:'pointer'}}>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link text-white fs-4 mx-4" onClick={()=>setCategory("technology")} style={{cursor:'pointer'}}>Technology</div>
        </li>
        <li className="nav-item">
          <div className="nav-link text-white fs-4 mx-4" onClick={()=>setCategory("sports")} style={{cursor:'pointer'}}>Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link text-white fs-4 mx-4" onClick={()=>setCategory("science")} style={{cursor:'pointer'}}>Science</div>
        </li>
        <li className="nav-item">
          <div className="nav-link text-white fs-4 mx-4" onClick={()=>setCategory("health")} style={{cursor:'pointer'}}>Health</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
