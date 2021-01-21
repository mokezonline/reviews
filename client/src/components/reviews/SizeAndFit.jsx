import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  stylesDefault: PropTypes.object.isRequired,
  fit: PropTypes.string,
  // reviews: PropTypes.isRequired,
};

const defaultProps = {
  fit: 'missing',
};

class SizeAndFit extends React.Component {
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
    const { B } = stylesDefault;
    const { Span1 } = stylesDefault;
    const { Span2 } = stylesDefault;
    const { Div2 } = stylesDefault;
    const { Div3 } = stylesDefault;
    const { Button1 } = stylesDefault;
    // Props
    const { fit } = this.props;

    return (
      <div>
        <B>
          <Span1>
            Size & Fit
          </Span1>
        </B>
        <Div2>
          {fit}
        </Div2>
        <Div3>
          <Span2>
            34% of reviewers
          </Span2>
          <Button1 type="submit">?</Button1>
        </Div3>
      </div>
    );
  }
}

SizeAndFit.propTypes = propTypes;
SizeAndFit.defaultProps = defaultProps;
export default SizeAndFit;
