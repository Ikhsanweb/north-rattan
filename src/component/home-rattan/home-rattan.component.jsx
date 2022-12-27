import './home-rattan.styles.scss';

const HomeRattan = () => {
  return (
    <div className="home-rattan-container">
      <div id="hero" className="hero-section">
        <h1>Welcome to North Rattan</h1>
      </div>

      <div id="about" className="about-section">
        <h2 className="about-section-title">About Us</h2>
        <p className="about-section-paragraph">
          North Rattan is supplier of rattan products from Sumatera Utara,
          Indonesia. We`re doing cooperation with a few rattan collector to give
          best quality rattan for customer. We can serve any kind of rattan and
          also rattan furniture products such as rattan table, rattan chair,
          rattan lantern and many more`
        </p>
      </div>

      <div id="products" className="products-section">
        <h2>Our Products</h2>
        <div className="product-card-container">
          <div className="product-card">
            <div className="product-card-image-container"></div>
            <div className="product-card-description">
              <span className="product-card-title">Rattan Manau</span>
              <span className="product-card-subtitle">Stock: 20.000</span>
            </div>
            <div className="product-card-explanation">
              <span>
                Rattan sells well in local and international markets which has
                high commercial value. Mostly used for househol furniture such
                as tables, chairs, beds amd others
              </span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-card-image-container"></div>
            <div className="product-card-description">
              <span className="product-card-title">Rattan B</span>
              <span className="product-card-subtitle">Stock: 30.000 pts</span>
            </div>
          </div>
        </div>
      </div>

      <div id="contacts" className="contacts-section">
        <h2 className="contact-section-title">Contact Us</h2>
        <div className="contact-card-container">
          <div className="contact-card">
            <div className="contact-card-image-component"></div>
            <div className="contact-card-description">
              <span className="contact-card-name">Tohir Paul</span>
              <span className="contact-card-phone">088808880888</span>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-card-image-component"></div>
            <div className="contact-card-description">
              <span className="contact-card-name">Tohir Paul</span>
              <span className="contact-card-phone">088808880888</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRattan;
