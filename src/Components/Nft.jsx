import './style.css';
const Nft = () =>{
    return(
        <section className="nft p-5 text-white text-center body-color" id="pages">
        <div className="container">
          <div className="row justify-content-between align-items-center justify-content-center">
            <h4>Create and sell your NFTs</h4>
            <p className="text-white">Here are a few reasons why you should choose Oction for sell your NFT</p>
            <div className="col-xl-4 col-md-6 col-xs-12 ">
              <div className="card p-2 m-2" style={{width: '20rem'}}>
                <div className="step text-muted text-end">
                  <h2 className="d-inline h1 transition">01</h2>
                  step
                </div>
                <img src="./images/connect-icon.png " className="card-img-top pb-3 ps-2 transition" alt="..."/>
               
                <div className="card-body">
                  <h4 className="transition">Connect your wallet</h4>
                  <p className="card-text text-white-50 text-muted">NFTs are the latest and greatest application of blockchain technology, and marketplace has become theplatform for NFT.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-xs-12">
              <div className="card p-2 m-2" style={{width: '18rem'}}>
                <div className="step text-muted transition text-end">
                  <h2 className="d-inline h1">02</h2>
                  step
                </div>
                <img src="./images/create-collection.png" className="card-img-top pb-3 ps-2 transition" alt="..."/>
               
                <div className="card-body">
                  <h4 className="transition">Connect your wallet</h4>
                  <p className="card-text text-white-50 text-muted">NFTs are the latest and greatest application of blockchain technology, and marketplace has become theplatform for NFT.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-xs-12">
              <div className="card p-2 m-2" style={{width: '18rem'}}>
                <div className="step text-muted text-end">
                  <h2 className="d-inline h1 transition">03</h2>
                  step
                </div>
                <img src="./images/list-icon.png" className="card-img-top pb-3 ps-2 transition" alt="..."/>
               
                <div className="card-body">
                  <h4 className="transition">Connect your wallet</h4>
                  <p className="card-text text-white-50 text-muted">NFTs are the latest and greatest application of blockchain technology, and marketplace has become theplatform for NFT.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    )
}
export default Nft;