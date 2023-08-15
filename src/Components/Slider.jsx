import './style.css';
const Slider = () =>{
    return(
        <section class="slider h-100 body-color">
        <div class="container">
          <div class="row  justify-content-center align-items-center justify-content-between">
            <div class="col-xl-6 col-md-6 col-xs-12 slider-content text-white">
              <h2>Discover Digital Artworks & Collect Best <span> NFTs</span></h2>
              <p class="text-muted pb-3">There is enough digital artworks available online to help you put together crypto currency website.</p>
              <button class="btn text-white d-inline transition">Explore Now</button>
              <h6 class="d-inline px-4"><i class="fa-solid fa-circle-play px-2 h4"></i>Watch Video</h6>
            </div>
            <div class="col-xl-6 col-md-6 col-xs-12 p-4 slider-img">
              <div class="row justify-content-center">
                <div class="s-img d-none d-sm-block "><img src="./images/sliderimg.png" alt="" srcset=""/></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Slider;