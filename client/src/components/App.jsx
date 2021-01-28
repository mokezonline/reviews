import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReviewComponent from './ReviewComponent';
import ReviewList from './ReviewSRC/seeReviews/ReviewList';
import ReviewForm from './ReviewSRC/makeReviews/ReviewForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      view: null,
    };
    this.getProduct = this.getProduct.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    axios.get('/productreviews').then(({ data }) => {
      this.setState({
        product: data[0],
        view: null,
      });
    });
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  render() {
    const Page = styled.div`
      @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
      ::-webkit-scrollbar {display:none;}
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
    const { product, view } = this.state;
    const {
      reviews,
      ratingCount,
      productName,
      imgUrl,
    } = product;

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
          {view === 'writeReviews' && <ReviewForm productName={productName} imgUrl={imgUrl} changeView={this.changeView} />}
        </div>
      </div>
    );
  }
}

export default App;
