
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div className="App">
      <header>
        <div className="navbar">
          <div className="nav-logo border">
            <div className="logo"></div>
          </div>
          <div className="nav-address border">

            <p className="address1">Deliver to</p>
            <div className="add-icon">
              <FontAwesomeIcon icon={faLocationDot} />
              <p className="address2">India</p>
            </div>

          </div>

          <div className="nav-search">
            <select className="search-select">
              <option>All</option>
            </select>

            <input className="search-input" placeholder="Amazon search"></input>

            <div className="search-icon">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>

          </div>

          <div className="nav-signin border">
            <p><span>Hello, sign in</span></p>
            <p class="nav-second">Account & Lists</p>

          </div>
          <div className="nav-signin border">
            <p><span>Returns</span></p>
            <p class="nav-second">& Orders</p>

          </div>

          <div className="nav-cart">
            <div className="cart-icon">
              <FontAwesomeIcon icon={faCartShopping} />
              <p>cart</p>
            </div>

          </div>

        </div>
        <div class="panel">
          <div className="panel-all">
            <FontAwesomeIcon icon={faBars} />
            All
          </div>

          <div className="panel-ops">
            <p>Today's Deals</p>
            <p>Customer Service</p>
            <p>Rergistry</p>
            <p>Gift Cards</p>
            <p>sell</p>
          </div>
          <div class="panel-deals">
            shop deals in Electronics
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
