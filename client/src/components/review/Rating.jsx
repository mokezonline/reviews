import React from 'react';

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 4.5,
      reviewCount: 113,
    };
  }

  render() {
    const { rating } = this.state;
    const { reviewCount } = this.state;

    const buttonStyle = {
      borderRadius: '100%',
    };
    return (
      <div>
        <h1>
          {rating}
          /5
        </h1>
        <p style={this.subTextFontStyle}>
          <span>Based on </span>
          {reviewCount}
          <span> Reviews </span>
          <button type="submit" style={buttonStyle}>?</button>
        </p>
      </div>
    );
  }
}

export default Rating;
