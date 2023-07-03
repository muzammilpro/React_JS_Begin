// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">

      



//       );
// }

//       export default App;


import logo from './logo.svg';
import './App.css';
import './Styling/bootstrap.css'

function App() {
  return (
    <div className="App">
      <div className="imgContainer">
        {/* {  <!-- navBar -->} */}
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <img src="./Assets/MH logo.png" id="logo" alt="" />
            <a className="navbar-brand" href="#">Muzammil World</a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto">
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Home</a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-white" href="#">Accomodation</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Gallery</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">About us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <br /> <br />
        <br /> <br />

        <div className="container">
          <center>
            <h1 className="headerText">Maldives luxury</h1>
            <p className="headerText"> Luxury Hotel is situated in Maldives. Price from 19$/ Night</p>
          </center>
          <center>
            <div className="timeContainer">
              <p className="headerText">
                A Luxury Hotel is situated in the Maldives, Prices From 19$ / Night
              </p>
            </div>
          </center>
        </div>

        <br /> <br />
        <br /> <br />
        <br /> <br />
        <br /> <br />
      </div>
      <br />
      <br />
      <div className="container">
        <center>
          <h4>Our Facilities</h4>
        </center>
        <br /> <br />

        <div className="cards">
          <div className="card" style={{ width: "15rem" }}>
            <div className="card-body">
              <center>
                <img src="./Assets/card_img.png" alt="Card Image" className="card_img" />
                <h5 className="card-title">City Views</h5>
                <h6 className="card-subtitle mb-2 text-muted">Cras eu Lorem a finbus veut nec <br />
                  fellis mollis suscript
                </h6>
              </center>
            </div>
          </div>

          <div className="card" style={{ width: "15rem" }}>
            <div className="card-body">
              <center>
                <img src="./Assets/card_img.png" alt="" className="card_img" />
                <h5 className="card-title">Swimming Pool</h5>
                <h6 className="card-subtitle mb-2 text-muted">Cras eu Lorem a finbus veut nec <br />
                  fellis mollis suscript
                </h6>
              </center>
            </div>
          </div>

          <div className="card" style={{ width: "15rem" }}>
            <div className="card-body">
              <center>
                <img src="./Assets/card_img.png" alt="" className="card_img" />
                <h5 className="card-title">South Facing</h5>
                <h6 className="card-subtitle mb-2 text-muted">Cras eu Lorem a finbus veut nec <br />
                  fellis mollis suscript
                </h6>
              </center>
            </div>
          </div>

          <div className="card" style={{ width: "15rem" }}>
            <div className="card-body">
              <center>
                <img src="./Assets/card_img.png" alt="" className="card_img" />
                <h5 className="card-title">Subway Nearby</h5>
                <h6 className="card-subtitle mb-2 text-muted">Cras eu Lorem a finbus veut nec <br />
                  fellis mollis suscript
                </h6>
              </center>
            </div>
          </div>
        </div>
      </div>
      <br /><br /> <br />
      <div className="container">
        <div className="row">
          <div className="col bigCards">
            <h1 className="underLine">About US</h1> <br /><br />
            <p className="bigCardText">Maecenas feugiat mattis ipsum, vitae semper massa porttitor sit amet.
              Nella mattis, ufna at posuene ornare, neque leo dapibus ante,
              rac difnasim massa fellis ad nulls donec porttitor rulla triatique dignism</p>
          </div>
          <div className="col">
            <img src="./Assets/Bed-Room.jpg.jpg" alt="" className="bigCards" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
