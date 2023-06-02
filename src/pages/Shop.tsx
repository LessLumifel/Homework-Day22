import React from 'react';
import ResponsiveAppBar from '../components/Appbar';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      image: 'https://images.unsplash.com/photo-1626450429795-a3ba2964ef7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWwlMjBndW5kYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      image: 'https://images.unsplash.com/photo-1617383173983-c9c24f6bfda3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWwlMjBndW5kYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    }
  ];

  return (
    <>
      <ResponsiveAppBar />
      <div style={{ padding: '20px' }}>
        <h1>Shop</h1>
        {products.map((product) => (
          <div key={product.id} style={{ marginBottom: '20px' }}>
            <img src={product.image} alt={product.name} style={{ width: '200px', height: '200px' }} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <Button variant="contained" component={Link} to="/cart">
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shop;
