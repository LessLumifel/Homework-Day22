import React, { useState } from 'react';
import ResponsiveAppBar from '../components/Appbar';
import { Typography, Button, List, ListItem, ListItemText } from '@mui/material';

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 }
  ]);

  const handleAddToCart = (item: { id: number; name: string; price: number; }) => {
    // จัดการเพิ่มสินค้าลงในตะกร้า
    console.log('Add to cart:', item);
  };

  return (
    <>
      <ResponsiveAppBar />
      <div style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Cart
        </Typography>
        {items.length > 0 ? (
          <List>
            {items.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemText primary={item.name} secondary={`$${item.price}`} />
                <Button variant="contained" color="primary" onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </Button>
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="body1">Your cart is empty.</Typography>
        )}
      </div>
    </>
  );
};

export default Cart;
