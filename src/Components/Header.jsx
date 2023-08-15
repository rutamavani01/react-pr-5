import './style.css';
const Header = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="./images/logo.png"/>  
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="#">Home<i className="fa-solid fa-angle-down"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#explore">Explore<i className="fa-solid fa-angle-down"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#creator" tabindex="-1" aria-disabled="true">Creator</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#pages" tabindex="-1" aria-disabled="true">Pages<i
                    className="fa-solid fa-angle-down"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">Form</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#contact" tabindex="-1" aria-disabled="true">Contact</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2 text-white bg-dark" type="search" placeholder="Search keyword" aria-label="Search"/>
              <button className="btn text-white transition"> Wallet</button>
            </form>
          </div>
        </div>
      </nav>
    )
}
export default Header;