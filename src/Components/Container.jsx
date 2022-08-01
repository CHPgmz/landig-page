import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faFire,
  faTruck,
  faBatteryFull,
} from "@fortawesome/free-solid-svg-icons";
library.add(faUser, faFire, faTruck, faBatteryFull);

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {
//solid,
//regular,
//brands,
//} from "@fortawesome/fontawesome-svg-core/import.macro";

const name = "name";
const Container = () => {
  return (
    <>
      <div className="container">
        <Hero id="hero" />
        <Features idFeatures="features" />
        <Video id="video" />
        <Pricing id="pricing" />
        <Footer id="footer" />
      </div>
    </>
  );
};

const Hero = (props) => {
  return (
    <section id={props.id}>
      <h2>Sit iusto aspernatur.</h2>
      <form action="#" id="form">
        <input type="email" id="email" placeholder="Enter your email adres" />
        <input type="submit" id="submit" value="Get Started" />
      </form>
    </section>
  );
};

const Features = ({ idFeatures }) => {
  return (
    <section id={idFeatures} className="features">
      <div className="grid">
        <div className="icon">
          <FontAwesomeIcon icon="truck" className="icon-font" />
        </div>
        <div className="description">
          <h2>Amet adipisicing repellendus</h2>
          <p>
            Lorem tempore id quisquam consectetur natus aliquam doloribus.
            Corrupti culpa
          </p>
        </div>
      </div>
      <div className="grid">
        <div className="icon">
          <FontAwesomeIcon icon="truck" className="icon-font" />
        </div>
        <div className="description">
          <h2>Amet illo labore?</h2>
          <p>
            Ipsum quidem tempore natus nesciunt ipsa Magnam ipsa magnam
            voluptatum voluptas a Molestiae recusandae nemo?
          </p>
        </div>
      </div>
      <div className="grid">
        <div className="icon">
          <FontAwesomeIcon icon="battery-full" className="icon-font" />
        </div>
        <div className="description">
          <h2>Amet nulla ratione?</h2>
          <p>
            Elit officiis eius ipsam fugit corporis Quo quod veniam cum
            consectetur libero? Vel tempore obcaecati.
          </p>
        </div>
      </div>
    </section>
  );
};

const Video = ({ id }) => {
  return (
    <section className="video" id={id}>
      <video controlsList="true">
        <source
          src="https://www.youtube.com/watch?v=m6mkA6Zr1vY&feature"
          type="video/mp4"
        ></source>
      </video>
    </section>
  );
};

const Pricing = ({ id }) => {
  return (
    <section id={id} className="pricing">
      <div className="product">
        <div className="product-name">Amet dignissimos</div>
        <h2 className="product-pricing">100</h2>
        <ol className="list">
          <li>Elit distinctio</li>
          <li>Sit officiis</li>
          <li>Sit laborum!</li>
          <li>Sit eum</li>
        </ol>
        <button className="btn">submit</button>
      </div>
      <div className="product">
        <div className="product-name">Dolor quaerat quasi</div>
        <h2 className="product-pricing">100</h2>
        <ol className="list">
          <li>Elit distinctio</li>
          <li>Sit officiis</li>
          <li>Sit laborum!</li>
          <li>Sit eum</li>
        </ol>
        <button className="btn">submit</button>
      </div>
      <div className="product">
        <div className="product-name">Amet libero excepturi</div>
        <h2 className="product-pricing">100</h2>
        <ol className="list">
          <li>Elit distinctio</li>
          <li>Sit officiis</li>
          <li>Sit laborum!</li>
          <li>Sit eum</li>
        </ol>
        <button className="btn">submit</button>
      </div>
    </section>
  );
};

const Footer = ({ id }) => {
  return (
    <footer id={id}>
      <div className="foot-terms">
        <ol>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Contact</li>
        </ol>
      </div>
      <div className="foot-desc">
        <p>Developed by José Alfredo :)</p>
      </div>
    </footer>
  );
};

export { Container };
