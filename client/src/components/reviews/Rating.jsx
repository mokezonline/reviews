import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  stylesDefault: PropTypes.object.isRequired,
  // reviews: PropTypes.isRequired,
};

class Rating extends React.Component {
  static methodsAreOk() {
    return true;
  }

  constructor(props) {
    super(props);
    this.state = {
      rating: 4.5,
      reviewCount: 113,
    };
  }

  render() {
    const { stylesDefault } = this.props;
    const { Button1 } = stylesDefault;
    const { B } = stylesDefault;
    const { Span1 } = stylesDefault;
    const { Span2 } = stylesDefault;
    const { Div2 } = stylesDefault;
    const { Div3 } = stylesDefault;

    const { rating } = this.state;
    const { reviewCount } = this.state;
    const basedText = `Based on ${reviewCount} reviews`;

    return (
      <div>
        <B>
          <Span1>
            {rating}
          </Span1>
          /
          <Span1>
            5
          </Span1>
        </B>
        <Div2>
          *****
        </Div2>
        <Div3>
          <Span2>
            {basedText}
          </Span2>
          <Button1 type="submit">?</Button1>
        </Div3>
      </div>
    );
  }
}

Rating.propTypes = propTypes;
export default Rating;
