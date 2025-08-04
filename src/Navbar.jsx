import './Navbar.css'; 


function Navbar() {
    return ( 
        <nav className="navbar-container flex absolute top-0 justify-center items-center w-full sm:items-center sm:flex">
            <h1 className='text absolute top-0 left-0 flex text-black  sm:text-white'>Island</h1>
            <ul className="navbar-list justify-center absolute top-5">
                <li className="navbar-item justify-center items-center sm:text-white">
                    <a href="/">Our Tours</a>
                    <a href="/">About US</a>
                    <a href="/">Booking</a>
                    <a href="/">FAQ</a>
                </li>
            </ul>
        </nav>
     );
}

export default Navbar;