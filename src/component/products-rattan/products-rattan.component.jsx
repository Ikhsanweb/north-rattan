import './products-rattan.styles.scss';
import { FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { products } from '../../constants/resource';
import { Fragment } from 'react';
import { NRWLogo } from '../../constants/image';

const ProductsRattan = () => {
  return (
    <div className="products-rattan-container">
      <div className="products-rattan-navbar">
        <div className="products-rattan-home-icon">
          <Link to="/">
            <FiHome />
          </Link>
        </div>
      </div>
      <div className="products-rattan-title">
        <h1>
          North Rattan <br /> Products
        </h1>
      </div>

      {/* <div className="products-rattan-contents">
        {products.map(({ id, name, image, items, descriptiom, status }) => (
          <Fragment>
            <h2 key={id}>{name}</h2>
            <div className="products-rattan-image-container">
              {items.map((image) => (
                <img
                  key={image.itemId}
                  src={image.itemImage}
                  alt={image.itemName}
                />
              ))}
            </div>
          </Fragment>
        ))}
      </div> */}

      <div className="products-rattan-contents">
        <div className="products-rattan-content">
          <div className="products-rattan-image-container">
            {products.map(({ id, name, image, items, descriptiom, status }) => (
              <Fragment key={id}>
                <h2>{name}</h2>
                {items.map((image) => (
                  <img
                    key={image.itemId}
                    src={image.itemImage}
                    alt={image.itemName}
                  />
                ))}
                <p className="pdesc">{descriptiom}</p>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsRattan;
