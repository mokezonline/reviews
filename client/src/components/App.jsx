import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReviewComponent from './ReviewComponent';
import ReviewList from './reviews/seeReviews/ReviewList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      view: null,
    };
    this.getProduct = this.getProduct.bind(this);
    this.changeView = this.changeView.bind(this);
    // this.renderModals = this.renderModals.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    axios.get('/products').then(({ data }) => {
      this.setState({
        product: data[0],
        view: null,
      });
    });
  }

  changeView(option) {
    console.log('clicked!');
    this.setState({
      view: option,
    });
  }

  // renderModals() {
  //   const { view } = this.state;
  //   const { product } = this.state;
  //   const { reviews } = product;

  //   if (view === 'seeReviews') {
  //     return <ReviewList reviews={reviews} changeView={this.changeView} />;
  //   }
  //   return (<button type="submit" value="hello">Hello</button>);
  // }

  render() {
    const Page = styled.div`
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow-x: hidden;
    `;
    const { product } = this.state;
    const { view } = this.state;
    const { reviews } = product;
    const { ratingCount } = product;
    return (
      <div>
        <Page>
          <div id="page-layout">
            <div id="reviews-bar">
              <ReviewComponent product={product} changeView={this.changeView} />
            </div>
          </div>
        </Page>
        <div className="overlay">
          {view === 'seeReviews' && <ReviewList reviews={reviews} ratingCount={ratingCount} changeView={this.changeView} />}
          {view === 'writeReviews' && <ReviewList reviews={reviews} ratingCount={ratingCount} changeView={this.changeView} />}
        </div>
      </div>
    );
  }
}

export default App;
