import './Card.css';
import './index.css'

function Card() {
    return (
        <div className="card-main" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 className='text-black flex absolute left-0 title-h1'>Choose your tutor</h1>
            <div
                className="card-row"
                style={{
                    display: 'flex',
                    gap: '1rem',
                    flexWrap: 'nowrap',
                    overflowX: 'auto',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    margin:'90px 0px 0px 0px'
                }}
            >
                <div className="card2 flex flex-col items-center justify-center" style={{ minWidth: '250px', background: '#fff', borderRadius: '1rem', overflow: 'hidden', margin:'35px' }}>
                    <img src="./src/assets/farm-resolution.jpg" className="card-img-top w-46 h-48 rounded-t-xl" alt="..." />
                    <div className="card-body text-black flex flex-col items-center justify-center">
                        <h5 className="card-title">Alone with Nature</h5>
                        <p className="card-text text-center">$100/person</p>
                    </div>
                     <i class="bi bi-arrow-right-circle-fill"></i> 
                </div>
                <div className="card2 flex flex-col items-center justify-center " style={{ minWidth: '250px', background: '#fff', borderRadius: '1rem', overflow: 'hidden' }}>
                    <img src="./src/assets/farm-resolution.jpg" className="card-img-top w-46 h-48 rounded-t-xl" alt="..." />
                    <div className="card-body text-black flex flex-col items-center justify-center">
                        <h5 className="card-title">Jeep Ride</h5>
                        <p className="card-text text-center">$200/person</p>
                    </div>
                     <i class="bi bi-arrow-right-circle-fill"></i> 
                </div>
                <div className="card2 flex flex-col items-center justify-center " style={{ minWidth: '250px', background: '#fff', borderRadius: '1rem', overflow: 'hidden' }}>
                    <img src="./src/assets/farm-resolution.jpg" className="card-img-top w-46 h-48 rounded-t-xl" alt="..." />
                    <div className="card-body text-black flex flex-col items-center justify-center">
                        <h5 className="card-title">Hiking Tour</h5>
                        <p className="card-text text-center">$150/person</p>
                    </div>
                     <i class="bi bi-arrow-right-circle-fill"></i> 
                </div>
                <div className="card2 flex flex-col items-center justify-center " style={{ minWidth: '250px', background: '#fff', borderRadius: '1rem', overflow: 'hidden' }}>
                    <img src="./src/assets/farm-resolution.jpg" className="card-img-top w-46 h-48 rounded-t-xl" alt="..." />
                    <div className="card-body text-black flex flex-col items-center justify-center">
                        <h5 className="card-title">Corners of the Island</h5>
                        <p className="card-text text-center">$220/person</p>
                    </div>
                     <i class="bi bi-arrow-right-circle-fill"></i> 
                </div>
            
               
            </div>
            <button className='see-btn mt-4'>See all</button>
        </div>
    );
}

export default Card;