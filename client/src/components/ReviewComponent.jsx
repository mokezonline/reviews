import React from 'react';
import Rating from './review/Rating';

class ReviewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const backBarStyle = {
      height: '600px',
      width: '100%',
      backgroundColor: '#000',
    };
    const barContents = {
      padding: '150px 0 0 75px',
      float: 'left',
      color: '#fff',
      fontFamily: 'Roboto, sans-serif',
    };
    const reviewTitle = {
      fontSize: '20px',
      fontWeight: '500',
      width: '300px',
    };
    return (
      <div id="back-bar" className="container" style={backBarStyle}>
        <div style={barContents}>
          <h1 style={reviewTitle}>Reviews</h1>
        </div>
        <div style={barContents}>
          <Rating />
        </div>
      </div>
    );
  }
}

export default ReviewComponent;
