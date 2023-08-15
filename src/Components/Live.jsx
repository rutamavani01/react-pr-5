import './style.css';
const Live = ()=>{
    return(
        <section className="live p-5 body-color" id="creator">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <h2 className="text-white"><i className="fa-solid fa-circle-notch px-3"></i>Live Bids</h2>
            <div className="card col-xl-4 col-md-6 col-lg-6 col-xs-12 p-4 m-4" style={{width: '23rem'}}>
             <div className="live-box">
               <img src="./images/oc-bids-1.jpg" className="card-img-top" alt="..."/>
             </div>
              <div className="card-body">
                <h6 className="card-title text-white-50">
                  <img src="./images/profile1.jpg" width="30px" className="rounded-circle"/>
                  @johnson
                </h6>
                <h5 className="text-white">Easter Santa Clause</h5>
                <h6 className="text-white-50">Current Bid</h6>
                <span className="text-primary d-inline pe-3">46.46 ETH</span>
                <span className="text-primary d-inline px-4">Activity</span>
                <a href="#" className="btn btn-primary w-100 mt-3">Place Bid</a>
              </div>
            </div>
            <div className="card col-xl-4 col-md-6 col-lg-6 col-xs-12 p-4 m-4" style={{width: '23rem'}}>
              <div className="live-box">
                <img src="./images/oc-bids-2.jpg" className="card-img-top w-100" alt="..."/>
              </div>
              <div className="card-body">
                <h6 className="card-title text-white-50">
                  <img src="./images/profile2.jpg" width="30px" className="rounded-circle"/>
                  @johnson
                </h6>
                <h5 className="text-white">Easter Santa Clause</h5>
                <h6 className="text-white-50">Current Bid</h6>
                <span className="text-primary d-inline pe-3">46.46 ETH</span>
                <span className="text-primary d-inline px-4">Activity</span>
                <a href="#" className="btn btn-primary w-100 mt-3">Place Bid</a>
              </div>
            </div>
            <div className="card col-xl-4 col-md-6 col-lg-6 col-xs-12 p-4 m-4" style={{width: '23rem'}}>
             <div className="live-box">
              <img src="./images/oc-bids-3.jpg" className="card-img-top" alt="..."/>
             </div>
              <div className="card-body">
                <h6 className="card-title text-white-50">
                  <img src="./images/profile3.jpg" width="30px" className="rounded-circle"/>
                  @johnson
                </h6>
                <h5 className="text-white">Easter Santa Clause</h5>
                <h6 className="text-white-50">Current Bid</h6>
                <span className="text-primary d-inline pe-3">46.46 ETH</span>
                <span className="text-primary d-inline px-4">Activity</span>
                <a href="#" className="btn btn-primary w-100 mt-3">Place Bid</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Live;