import './Hero.css';


function Hero() {
    return (  
        <div className="background-hero flexbox justify-center items-center">
            <img className='farm-image'  src="./src/assets/farm-resolution.jpg" alt=""  />
         <div className="main">
          <h1 className='Azure flex '>Explore the sights <br /> of the Azures</h1>
          <p className='Azure2'>A place where nature and adventure unite</p>
         <button className="btn ">Book Now</button>
         <div className="buttons flex relative bottom-20 ">
            <i class="bi bi-arrow-left-circle"></i>
            <i class="bi bi-arrow-right-circle-fill"></i>
         </div>
         </div>
        </div>
    );
}

export default Hero;