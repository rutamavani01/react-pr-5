import './style.css';
const Wallet = () =>{
    return(
        <section  id="explore" className="body-color text-center pb-5 ">
        <div className="container">
          <div className="row">
            <div className="col-12 wallet row align-items-center justify-content-center">
              <div className="col-xl-2 col-md-3 xol-sm-5 bg-dark p-4 rounded-3 m-2">
                <img src="./images/oc-wallet-1.png" alt="" srcset=""/>
                <h5 className="text-white-50 pt-3">Meta Mask</h5>
              </div>
              <div className="col-xl-2 col-md-3 xol-sm-12 bg-dark p-4 rounded-3  m-2">
                <img src="./images/oc-wallet-2.png" alt=""/>
                <h5 className="text-white-50 pt-3"> Binance</h5>
              </div>
              <div className="col-xl-2 col-md-3 xol-sm-12 bg-dark p-4 rounded-3  m-2">
                <img src="./images/oc-wallet-3.png" alt=""/>
                <h5 className="text-white-50 pt-3">Formatic</h5>
              </div>
              <div className="col-xl-2 col-md-3 xol-sm-12 bg-dark p-4 rounded-3  m-2">
                <img src="./images/oc-wallet-4.png" alt=""/>
                <h5 className="text-white-50 pt-3">Formatic</h5>
              </div>
              <div className="col-xl-2 col-md-3 xol-sm-12 bg-dark p-4 rounded-3 m-2">
                <img src="./images/oc-wallet-5.png" alt=""/>
                <h5 className="text-white-50 pt-3">Formatic</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Wallet;