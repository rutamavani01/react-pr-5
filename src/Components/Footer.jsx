import './style.css';
const Footer = () =>{
  return(
    <footer className="text-center text-lg-start text-white p-5">
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    </section>
    <section >
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              <img src="img/oction-logo-bw.png" alt="" srcset=""/>
            </h6>
            <p>
              We provide one-stop solutions for all IT items; your bliss is just a click away. Star Tech trusts in quality client
            </p>
            <div className="social text-center">
              <a href="" className="me-4 text-reset">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-linkedin"></i>
              </a>
             
            </div>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              Marketplace
            </h6>
            <p>
              <a href="#!" className="text-reset">Proper Guidelines</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Buy Products</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Compare Us</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Career</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Build Ecommerce</a>
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              Explore Artworks
            </h6>
            <p>
              <a href="#!" className="text-reset">3D Artworks</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Photography</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Flat Illustration</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Painting</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Intro Videos</a>
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              Insight Community
            </h6>
            <p>
              <a href="#!" className="text-reset">Global Partners</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Forum</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Virtual World</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Community</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Brand Assets</a>
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* Copyright  */}
      <section className="copyright p-3">
        <div className="container">
          <div className="row justify-content-center justify-content-between align-items-center">
            <div className="col-xl-4 col-md-6 col-xs-12">
              <p>© Copyrighted & Designed by BDevs</p>
            </div>
      <div className="col-xl-4 col-md-6 col-xs-12">
        <h6><i className="fa-solid fa-headphones-simple p-3 text-primary"></i>Have a question? Call us 24/7</h6>
        <h5 className="ps-5">(987) 547587587</h5>
      </div>
      <div className="col-xl-4 col-md-6 col-xs-12">
        <input type="text" placeholder="Enter email"/>
          <button className="transition">Subscribe</button>
      </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
export default Footer;