import logo from './logo.svg';
import './App.css';
import './my.js'
import { FaAtlassian, FaHome, IconName } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
 
function App() {
  return (
    <>
      <section className="main-header">
        <div className="head">
          <nav className="header container" id="navbar">
            <div className="logo">
              <a href="#"><img src={require('./image/logo.png')}  alt="" /></a>
            </div>
            <div className="menu">
              <ul className="flex">
                <li><a href="#">Home</a></li>
                <li><a href="#">about</a>
                  <ul className="peta-menu">
                    <li><a href="#">Our story</a></li>
                    <li><a href="#">Our Wines</a></li>
                    <li><a href="#">Our Wines alt</a></li>
                    <li><a href="#">The astate</a></li>
                    <li><a href="#">Gallery</a></li>
                  </ul>
                </li>
                <li><a href="#">shop</a>
                  <ul className="peta-menu">
                    <li><a href="#">All wine</a></li>
                    <li><a href="#">red Wines</a></li>
                    <li><a href="#">Shop style</a></li>
                    <li><a href="#">black Wines</a></li>
                    <li><a href="#">Exclusive wine</a></li>
                  </ul>
                </li>
                <li><a href="#">contect</a>
                  <ul className="peta-menu">
                    <li><a href="#">E-mail</a></li>
                    <li><a href="#">Number</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                  </ul>
                </li>
                <li><a href="#">club</a></li>
              </ul>
            </div>
            <div className="end-header">
              <ul className="flex">
                <li><a href="#">EN</a></li>
                <li><a href="#">EUR</a></li>
                <i className="fa-solid fa-bag-shopping"></i>
                <i className="fa-solid fa-user"></i>
                <i className="fa-solid fa-magnifying-glass"></i>
                {/* <i><FaAtlassian/></i> */}
                <i><FaHome/></i>
                {/* <i><MdEventSeat/></i> */}
                {/* <i><MdFavorite/></i> */}
              </ul>
            </div>
          </nav>
          <img className="png-img" src={require('./image/1.png')} alt="" />
          <div className="posi-abo-header">
            <h5>introducing villenoir wines</h5>
            <h3>Refinement</h3>
          </div>
        </div>
      </section>
      
      <section>
        <div className="back-2-img">
          <div className="container">
            <div className="text v">
              <h4>MESSAGE FROM VILLENOIR</h4>
              <h2>A New Generation of Winemakers</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet elit leo.</p><br />
              <p>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. .</p>
              <img className="sign" src={require('./image/5.png')} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="sec3-main">
        <div className="sec-3">
          <div className="container">
            <img className="img-2" src={require('./image/6.png')} alt="" />
            <div className="text v">
              <h5>2015</h5>
              <h4>current release</h4>
              <h2>Villenoir Cabernet Sauvignon</h2>
              <p>Served well-chilled our authentically made Villenoir Cabernet Sauvignon is a refreshingly delicate dry wine with hints of strawberry, citrus, and peach laced fruit.</p>
              <button className="btn1">discover</button>
              <button className="btn2">veiw all</button>
              <h6>Speak to a customer care specialist at:</h6>
              <h4>FR 555 555 0005.</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="sec4-main">
        <div className="sec4-pad">
          <div className="sec-4">
            <img className="set-1" src={require('./image/8.png')} alt="" />  
            <img className="set-2" src={require('./image/9.jpeg')} alt="" />
            <div className="fast text v">
              <img src={require('./image/10.png')} alt="" />
              <h4>CURRENT RELEASE</h4>
              <h2>We thrive in making fine wines that enrich the taste&soul.</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="sec5-main">
        <img className="img-1" src={require('./image/11.png')} alt="" />
        <img className="img-2" src={require('./image/13.png')} alt="" />
        <div className="box">
          <h4>VARIETIES</h4>
          <h2>The Reds</h2>
          <p>Cabernet Sauvignon</p>
          <p>Merlot</p>
          <p>Pinot Noir</p>
          <button>shop now</button>
        </div>
        <div className="box2">
          <div className="child1">
            <h2>5</h2>
            <p>varietals</p>
          </div>
          <div className="child1">
            <h2>162</h2>
            <p>wine produced</p>
          </div>
          <div className="child1">
            <h2>48</h2>
            <p>awards won</p>
          </div>
        </div>
      </section>

      <section className="sec6-main">
      <img className="img-1" src={require('./image/12.png')} alt="" />
        <img className="img-2" src={require('./image/13.png')} alt="" />
        <div className="box">
          <h4>VARIETIES</h4>
          <h2>The Reds</h2>
          <p>Cabernet Sauvignon</p>
          <p>Merlot</p>
          <p>Pinot Noir</p>
          <button>shop now</button>
        </div>
        <div className="box2">
          <div className="child1">
            <h2>5</h2>
            <p>varietals</p>
          </div>
          <div className="child1">
            <h2>162</h2>
            <p>wine produced</p>
          </div>
          <div className="child1">
            <h2>48</h2>
            <p>awards won</p>
          </div>
        </div>
      </section>

      <footer>
        <section className="footer">
          <div className="container">
            <p>VILLENOIR PROMISE</p>
            <h2>We make good wines</h2>
            <ul className="footer-menu">
              <li><a href="/">faq</a></li>
              <li><a href="/">terms</a></li>
              <li><a href="/">privacy</a></li>
              <li><a href="/">returns</a></li>
              <div className="footerce">  
                <span><i className="fa-brands fa-behance"></i></span>
                <span><i className="fa-solid fa-basketball"></i></span>
                <span><i className="fa-brands fa-twitter"></i></span>
                <span><i className="fa-brands fa-facebook-f"></i></span>
                <span><i className="fa-brands fa-linkedin-in"></i></span>
              </div>
              <h5>© 2021 VILLENOIR. ALL RIGHTS RESERVED</h5>
            </ul>
          </div>
        </section>
      </footer>
    </>
  );
}

export default App;
