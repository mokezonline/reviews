import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  stylesDefault: PropTypes.object.isRequired,
  // reviews: PropTypes.isRequired,
};

class Activities extends React.Component {
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

    return (
      <div>
        <B>
          <Span1>
            Activities
          </Span1>
        </B>
        <Div2>
          Casual Wear, Work, Hiking
        </Div2>
        <Div3>
          <Span2>
            Popular among reviewers
          </Span2>
        </Div3>
      </div>
    );
  }
}

Activities.propTypes = propTypes;
export default Activities;
