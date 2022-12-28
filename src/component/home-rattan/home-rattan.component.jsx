import './home-rattan.styles.scss';
import { RMF, TPaul } from '../../constants/image';
import { products } from '../../constants/resource';
import { Link } from 'react-router-dom';

const HomeRattan = () => {
  return (
    <div className="home-rattan-container">
      <div id="hero" className="hero-section">
        <h1>
          Welcome to <br /> North Rattan
        </h1>
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
        <h2 className="products-section-title">Our Products</h2>

        {products.map(({ name, id, image, descriptiom, status }) => (
          <div key={id} className="product-card-container">
            <div className="product-card">
              <div className="product-card-image-container">
                <img src={image} alt={name} />
              </div>
              <div className="product-card-description">
                <span className="product-card-title">{name}</span>
                <span className="product-card-subtitle">{status}</span>
              </div>
              <div className="product-card-explanation">
                <span>{descriptiom}</span>
              </div>
            </div>
          </div>
        ))}

        <div className="all-products">
          <span>
            <Link to="products">SEE All PRODUCTS</Link>
          </span>
        </div>
      </div>

      <div id="contacts" className="contacts-section">
        <h2 className="contact-section-title">Contact Us</h2>
        <div className="contact-card-container">
          <div className="contact-card">
            <div className="contact-card-image-component">
              <img src={TPaul} alt="Tohir" />
            </div>
            <div className="contact-card-description">
              <span className="contact-card-name">Tohir Paul</span>
              <span className="contact-card-phone">088808880888</span>
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
