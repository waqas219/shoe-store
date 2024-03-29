import React from 'react';
import { useParams } from 'react-router-dom';
import shoes from './../shoes.json';

function ProductItem() {
  const { id } = useParams();
  const shoe = shoes[id];
  if (!shoe) {
    return <h2>Product Not Found!</h2>
  }
  return (
    <div>
      <h1>Welcome to Product Item</h1>
      <div className="link">
        <h4>{shoe.name}</h4>
        <img src={shoe.img} height={500} alt="image" />
      </div>
    </div>
  );
}

export default ProductItem;