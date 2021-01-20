import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  stylesDefault: PropTypes.object.isRequired,
  // reviews: PropTypes.isRequired,
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
    const { stylesDefault } = this.props;
    const { B } = stylesDefault;
    const { Span1 } = stylesDefault;
    const { Span2 } = stylesDefault;
    const { Div2 } = stylesDefault;
    const { Div3 } = stylesDefault;
    const { Button1 } = stylesDefault;

    return (
      <div>
        <B>
          <Span1>
            Size & Fit
          </Span1>
        </B>
        <Div2>
          True To Size
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
export default SizeAndFit;
