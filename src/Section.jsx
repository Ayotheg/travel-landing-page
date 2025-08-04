import './Section.css'
import './index.css'

function Section() {
    return (
      <div className="section flex flex-col items-center">
        <h1 className="text-black mb-8 section-header">Top Values for you</h1>
        <h3 className="text-black mb-8 section-header2">Try variety of benefits when using our servies</h3>
        <div className="section-card flex flex-row justify-center items-center gap-8 ">
          <div className="card flex flex-col items-center bg-white p-6  text-black">
            <i className="bi bi-send text-3xl mb-4"></i>
            <h2 className="mb-2 font-bold">Airport Pickup</h2>
            <p>We provide escort from the airport to the hotel</p>
          </div>
          <div className="card flex flex-col items-center bg-white p-6  text-black">
            <i className="bi bi-wallet text-3xl mb-4"></i>
            <h2 className="mb-2">Easy Booking</h2>
            <p>Quick and easy booking of tours for upcoming dates.</p>
          </div>
          <div className="card flex flex-col items-center bg-white p-6  text-black">
            <i className="bi bi-people text-3xl mb-4"></i>
            <h2 className="mb-2">Best Tour Guide</h2>
            <p>Our best tour guide is ready to guide your trip</p>
          </div>
          <div className="card flex flex-col items-center bg-white p-6  text-black">
            <i className="bi bi-disc text-3xl mb-4"></i>
            <h2 className="mb-2">Lots of Promos</h2>
            <p>Various promotions and drawing of tours</p>
          </div>
         
        </div>
      </div>
    );
    
}

export default Section;