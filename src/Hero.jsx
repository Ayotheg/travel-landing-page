import './Hero.css';
import farmImage from './assets/farm-resolution.jpg'

function Hero() {
    return (  
        <div className="background-hero flexbox justify-center items-center">
            <img className='farm-image'  src={farmImage} alt=""  />
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
