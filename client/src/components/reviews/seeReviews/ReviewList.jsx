/* eslint-disable react/forbid-prop-types */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Review from './Review';
import FadeIn from '../animations/FadeIn';

const propTypes = {
  reviews: PropTypes.array,
  ratingCount: PropTypes.number,
  changeView: PropTypes.func,
};



const defaultProps = {
  reviews: ['missing'],
  ratingCount: 0,
  changeView: () => 'missing',
};

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const stylesObj = {
      Overlay: styled.div`
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.45);
      z-index: 2;
      cursor: pointer;
    `,
      Section: styled.div`
      display: flex;
      flex-direction: column;
      width: 1339px;
      height: 95%;
      background-color: rgba(255,255,255,1);
      border-radius: 3%;
      border: solid rgba(255,255,255,.8);
      overflow-y: scroll;
      overflow-x: hidden;
      box-shadow:5px 5px 2.5px rgba(0,0,0,.4);
    `,
      MainPanel: styled.div`
      color: #212529;
      font-size: 25px;
      display: inline;
      font-weight: 900;
    `,
      Ul: styled.ul`
        list-style-type: none;
      `,
      Exit: styled.button`
        font-family: 'Roboto', Sans Serif;
        font-weight: 500;
        font-size: 24px;
        color: #ffffff;
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
      `,
      ExitContainer: styled.div`
        width: 100%;
        display: flex;
        justify-content: flex-end;
      `,
    };
    const { Overlay } = stylesObj;
    const { Section } = stylesObj;
    const { MainPanel } = stylesObj;
    const { Ul } = stylesObj;
    const { Exit, ExitContainer } = stylesObj;

    const { reviews } = this.props;
    const { ratingCount } = this.props;
    const { changeView } = this.props;
    const headerMain = `Showing 1...10 out of ${ratingCount} reviews`;

    return (
      <FadeIn delay={250} duration={300}>
        <Overlay onClick={() => changeView('null')}>
          <ExitContainer>
            <Exit><u>Close (x)</u></Exit>
          </ExitContainer>
          <Section>
            <Ul>
              <li><MainPanel>{headerMain}</MainPanel></li>
              {reviews.map((review) => (
                <Review review={review} key={review._id} />
              ))}
            </Ul>
          </Section>
        </Overlay>
      </FadeIn>
    );
  }
}

ReviewList.propTypes = propTypes;
ReviewList.defaultProps = defaultProps;
export default ReviewList;
