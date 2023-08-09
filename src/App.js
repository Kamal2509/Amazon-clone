
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
          <div className="panel-all border">
            <FontAwesomeIcon icon={faBars} />
            All
          </div>

          <div className="panel-ops">
            <p className="border">Today's Deals</p>
            <p className="border">Customer Service</p>
            <p className="border">Registry</p>
            <p className="border">Gift Cards</p>
            <p className="border">sell</p>
          </div>
          <div class="panel-deals border">
            shop deals in Electronics
          </div>
        </div>
      </header>

      <div className="hero-section">
        <div className="hero-msg">
          <p>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.<a> Click here to go to amazon.in</a></p>
        </div >
      </div >
      <div className="Shop-section">
        <div className="box1 box">
          <div className="box-content">
            <h2>Clothes</h2>
            <div className="box1-img" ></div>
            <p>See more</p>
          </div>

        </div>
        <div className="box2 box">
          <div className="box-content">
            <h2>Health and Personal Care</h2>
            <div className="box2-img" ></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box3 box">
          <div className="box-content">
            <h2>Furniture</h2>
            <div className="box3-img" ></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box4 box">
          <div className="box-content">
            <h2>Electronics</h2>
            <div className="box4-img" ></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box1 box">
          <div className="box-content">
            <h2>Beauty Picks</h2>
            <div className="box5-img" ></div>
            <p>See more</p>
          </div>

        </div>
        <div className="box2 box">
          <div className="box-content">
            <h2>Pet Care</h2>
            <div className="box6-img" ></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <h2>New Arrival in Toys</h2>
            <div className="box7-img" ></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <h2>Discover Fasion treand</h2>
            <div className="box8-img" ></div>
            <p>See more</p>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-panel1">
          Back to Top
        </div>
        <div className="footer-panel2">
          <ul>
            <p>Get to Know Us</p>
            <a>Careers</a>
            <a>Blog</a>
            <a>Investor Relations</a>
            <a>Amazon Devices</a>
            <a>Amazon Science</a>
          </ul>
          <ul>
            <p>Make Money with Us</p>
            <a>Sell products on Amazon</a>
            <a>Sell on Amazon Business</a>
            <a>Sell apps on Amazon</a>
            <a>Become an Affiliate</a>
            <a>Advertise Your Products</a>
            <a>Self-Publish with Us</a>
            <a>Host an Amazon Hub</a>
            <a>See More Make Money with Us</a>
          </ul>
          <ul>
            <p>Amazon Payment Products</p>
            <a>Amazon Business Card</a>
            <a>Shop with Points</a>
            <a>Reload Your Balance</a>
            <a>Amazon Currency Converter</a>
          </ul>
          <ul>
            <p>Let Us Help You</p>
            <a>Amazon and COVID-19</a>
            <a>Your Account</a>
            <a>Your Orders</a>
            <a>Shipping Rates & Policies</a>
            <a>Returns & Replacements</a>
            <a>Manage Your Content and Devices</a>
            <a>Amazon Assistant</a>
            <a>Help</a>
          </ul>
        </div>
        <div className="footer-panel3">
          <div className="logo1"></div>
        </div>
        <div className="footer-panel4">
          <div className="pages">
            <a>Conditions of Use</a>
            <a>Privacy Notice</a>
            <a>Your Ads Privacy Choices</a>
          </div>
          <div className="copyright">© 1996-2023, Amazon.com, Inc. or its affiliates</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
