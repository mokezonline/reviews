import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  stylesDefault: PropTypes.object.isRequired,
  rating: PropTypes.number,
  ratingCount: PropTypes.number,
};
const defaultProps = {
  rating: 0,
  ratingCount: 0,
};

class Rating extends React.Component {
  static methodsAreOk() {
    return true;
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    // Styles
    const { stylesDefault } = this.props;
    const { Button1 } = stylesDefault;
    const { B } = stylesDefault;
    const { Span1 } = stylesDefault;
    const { Span2 } = stylesDefault;
    const { Div2 } = stylesDefault;
    const { Div3 } = stylesDefault;
    // Props
    const { rating } = this.props;
    const { ratingCount } = this.props;
    const basedText = `Based on ${ratingCount} reviews`;

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
Rating.defaultProps = defaultProps;
export default Rating;
