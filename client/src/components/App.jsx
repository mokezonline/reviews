import React from 'react';
import ReviewComponent from './ReviewComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="page-layout">
        <div>
          <h1>Size Carousel</h1>
        </div>
        <div>Overview</div>
        <div id="reviews-bar">
          <ReviewComponent />
        </div>
      </div>
    );
  }
}

export default App;
