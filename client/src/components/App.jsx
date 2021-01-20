import React from 'react';
import axios from 'axios';
import ReviewComponent from './ReviewComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    axios.get('/products').then(({ data }) => {
      this.setState({
        product: data[0],
      });
    });
  }

  render() {
    const { product } = this.state;
    return (
      <div id="page-layout">
        <div>
          <h1>Size Carousel</h1>
        </div>
        <div>Overview</div>
        <div id="reviews-bar">
          <ReviewComponent product={product} />
        </div>
      </div>
    );
  }
}

export default App;
