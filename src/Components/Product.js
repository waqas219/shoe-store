import React from 'react';
import { Link } from 'react-router-dom';
import shoes from './../shoes.json';


function Product() {
  return (
    <div>
      <h1>Welcome to Product</h1>
      <div className="products">
        {Object.keys(shoes).map(keyName=> {
          const shoe = shoes[keyName];
          return (
            <Link key={keyName} className="link" to={`/product/${keyName}`}>
              <h4>{shoe.name}</h4>
              <img src={shoe.img} height={150} alt="image" />
            </Link>
          )
        })}
      </div>
    </div>
  );
}

export default Product;