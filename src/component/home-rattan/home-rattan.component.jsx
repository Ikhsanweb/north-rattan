import './home-rattan.styles.scss';
import {
  ChairMidPicTwo,
  ChairPicOne,
  ChairPicThree,
  ChairPicTwo,
  Handcrafted,
  IPaul,
  RattanPicOne,
  TablePicOne,
} from '../../constants/image';
import { products } from '../../constants/resource';

const HomeRattan = () => {
  return (
    <div className="home-rattan-container">
      <div id="hero" className="hero-section">
        <div className="hero-section-up">
          <h2>Welcome to</h2>
          <h1>North Rattan</h1>
        </div>
        <div className="hero-section-down">
          <p>
            Rattan Supplier and Manufacturer from Medan City, Indonesia. We
            provide rattan material or furniture products.
          </p>
        </div>
      </div>

      <div id="about" className="about-section">
        <h2 className="about-section-title">About Us</h2>
        <p className="about-section-paragraph">
          North Rattan is supplier of rattan products from Sumatera Utara,
          Indonesia. We`re doing cooperation with a few rattan collector to give
          best quality rattan for customer. We can serve any kind of rattan and
          also rattan furniture products such as tables, chairs, baskets and
          many more`
        </p>

        <div className="about-intoduction">
          <div className="about-introduction-text-container">
            <p className="about-introduction-p">Rattan</p>
            <p className="about-introduction-p-two">Manufacture</p>
          </div>
          <div className="about-intoduction-image-container">
            <img src={ChairPicOne} alt="" />
          </div>
          <div className="about-intoduction-image-container">
            <img src={ChairPicTwo} alt="" />
          </div>
          <div className="about-intoduction-image-container">
            <img src={TablePicOne} alt="" />
          </div>
          <div className="about-intoduction-image-container">
            <img src={RattanPicOne} alt="" />
          </div>
          <div className="about-introduction-text-container">
            <p>
              From
              <br />
              Sumatera
              <br />
              Utara
            </p>
          </div>
        </div>
      </div>
      <div className="about-explanations">
        <span>
          {/* <img src={Handcrafted} alt="" /> */}
          <em>Handcrafted</em>
          <p>Fresh from the nature</p>
        </span>
      </div>

      <div id="products" className="products-section">
        <h2 className="products-section-title">Our Products</h2>
        <div className="product-card-mod-container">
          {products.map(
            ({
              name,
              id,
              image,
              descriptiom,
              characteristicTitle,
              characteristic,
              subTitle,
            }) => (
              <div key={id} className="product-cart-mod">
                <div className="product-cart-mod-image-title">
                  <div
                    className="product-cart-mod-image-title-up"
                    style={{ backgroundImage: `url(${image})` }}
                  >
                    <h2>{name}</h2>
                    <p>{subTitle}</p>
                  </div>
                </div>
                <div className="product-cart-mod-content">
                  <div className="product-cart-mod-content-description">
                    <p>{descriptiom}</p>
                  </div>
                  <div className="product-cart-mod-content-characteristic">
                    <span>Characteristic of {characteristicTitle} rattan.</span>
                    <ul>
                      {characteristic.map(
                        ({ characteristicId, characteristicText }) => (
                          <li key={characteristicId}>{characteristicText}</li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="all-products">
          <span>
            {/* <Link to="products">SEE All PRODUCTS</Link> */}
            <a href="https://wa.me/0812650469760">VISIT US</a>
          </span>
        </div>
      </div>

      <div className="furniture">
        <p>
          We also provide other products made of rattan such as tables, chairs,
          baskets and others
        </p>
        <div className="furniture-image-container">
          <div className="furniture-image">
            <img src={ChairMidPicTwo} alt="" />
          </div>
          <div className="furniture-image">
            <img src={TablePicOne} alt="" />
          </div>
          <div className="furniture-image">
            <img src={ChairPicThree} alt="" />
          </div>
          <div className="furniture-image">
            <img src={Handcrafted} alt="" />
          </div>
        </div>
      </div>

      <div id="contacts" className="contacts-section">
        <h2 className="contact-section-title">Contact Us</h2>
        <div className="contact-card-container">
          <div className="contact-card">
            <div className="contact-card-image-component">
              <img src="https://i.ibb.co/2tyHm0q/ttobat.jpg" alt="Tohir" />
            </div>
            <div className="contact-card-description">
              <span className="contact-card-name">
                T<span>ohir</span> S<span>ihotang</span>
                <hr />
              </span>
              <span className="contact-card-position">Founder</span>
              <span className="contact-card-phone">+62 8126 5046 9760</span>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-card-image-component">
              <img src={IPaul} alt="Ikhsan" />
            </div>
            <div className="contact-card-description">
              <span className="contact-card-name">
                M<span>uhammad</span> I<span>khsan</span>
                <hr />
              </span>
              <span className="contact-card-position">Co-Founder</span>
              <span className="contact-card-phone">+62 8950 9257 023</span>
            </div>
          </div>
          {/* <div className="contact-card">
            <div className="contact-card-image-component"></div>
            <div className="contact-card-description">
              <span className="contact-card-name">Tohir Paul</span>
              <span className="contact-card-phone">088808880888</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomeRattan;

// https://unsplash.com/photos/UovnNJOG9Vw?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/p26ANvMUqCk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
