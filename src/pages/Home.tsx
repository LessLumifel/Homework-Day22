import React from 'react';
import ResponsiveAppBar from '../components/Appbar';

const Home = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <div style={{ padding: '20px' }}>
        <h1>Welcome to Our Online Store</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec felis non mauris
          malesuada congue. Nam tincidunt nisl ut volutpat tempus. Proin elementum feugiat dolor sit
          amet commodo. Curabitur eget faucibus nunc. Mauris aliquet tellus ac enim tincidunt, a
          iaculis nunc placerat. Sed non eleifend nunc. Phasellus accumsan sollicitudin dui, nec
          gravida tortor aliquet vitae. Nulla facilisi. Aliquam non lectus fringilla, venenatis
          dui id, efficitur nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; In at laoreet massa, in efficitur magna.
        </p>
        <p>
          Sed et diam pulvinar, vehicula ligula id, sagittis eros. Nulla facilisi. In ut risus
          pretium, volutpat dui et, consectetur elit. Integer rutrum nulla vitae dolor consequat
          facilisis. Maecenas pretium enim sit amet dui pellentesque, vitae malesuada nunc euismod.
          Vivamus tempus consectetur dui, sit amet tincidunt risus feugiat a. Donec ut tellus sed
          nulla egestas aliquam ac at est. Phasellus consectetur turpis et diam ultrices elementum.
          Nullam interdum diam vitae augue tincidunt, nec laoreet erat pharetra. Nulla porttitor
          nisl leo, ac fermentum est facilisis in. Nullam id lectus nunc.
        </p>
      </div>
    </div>
  );
}

export default Home;
