import React from 'react';
import ReviewComponent from './ReviewComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  render() {
    const { reviews } = this.state;
    return (
      <div id="page-layout">
        <div>
          <h1>Size Carousel</h1>
        </div>
        <div>Overview</div>
        <div id="reviews-bar">
          <ReviewComponent reviews={reviews} />
        </div>
      </div>
    );
  }
}

export default App;
