import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Rating from './reviews/Rating';
import SizeAndFit from './reviews/SizeAndFit';
import Activities from './reviews/Activities';
import ReviewForm from './reviews/ReviewForm';

const propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  product: PropTypes.array.isRequired,
};

class ReviewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const stylesDefault = {
      Section1: styled.section`
        width: 100%;
        height: 599px;
        background-color: #000000;
        display: flex;
        align-items: center;
      `,
      Section2: styled.section`
      width: 100%;
      display: flex;
      flex-direction: column;
    `,
      Div1: styled.div`
        width: 100%;
        height: 152px;
        display: flex;
        line-height: 24.5px;
        text-align: left;
        margin-left: 50px;
      `,
      Div2: styled.div`
        width: 267px;
        height: 60px;
        color: #ffffff;
        font-family: 'Roboto', Sans Serif;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: -0.2px;
        display: flex;
        align-items: center;
    `,
      Div3: styled.div`
        width: 267px;
        height: 24px;
        align-items: center;
        color: #999999;
        display: flex;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: -0.24px;
        line-height: 24px;
        text-align: left;
    `,
      H2: styled.h2`
        color: #ffffff;
        flex-basis: 15.3125%;
        font-family: 'Roboto', Sans Serif;
        font-weight: 700;
        letter-spacing: -0.16px;
        line-height: 20px;
        text-align: left;
      `,
      Span1: styled.span`
        width: 267px;
        height: 36px;
        color: #ffffff;
        display: inline;
        font-size: 32px;
        letter-spacing: -0.32px;
        line-height: 36px;
        text-align;
      `,
      Span2: styled.span`
        color: #999999;
        font-size: 12px;
        letter-spacing: -0.24px;
        line-height: 24px;
        text-aling: left;
      `,
      B: styled.b`
      color: #ffffff;
      display: inline;
      font-family: 'Roboto', sans-serif;
      font-size: 32px;
      font-weight: 700;
      letter-spacing: -0.32xp;
      line-height: 36px;
      text-align: left;
    `,
      Button1: styled.button`
        background-color: #999999;
        border: none;
        border-radius: 100%;
        display: inline;
        margin: 10px;
        font-size: 12px;
        letter-spacing: -0.24px;
        line-height: 24px;
        text-align: left;
        outline: none;
      `,
    };
    // Styles
    const { H2 } = stylesDefault;
    const { Section1 } = stylesDefault;
    const { Section2 } = stylesDefault;
    const { Div1 } = stylesDefault;
    // Props
    const { product } = this.props;
    const { productName } = product;
    const { imgUrl } = product;
    const { rating } = product;
    const { ratingCount } = product;
    const { fit } = product;
    const { reviews } = product;

    return (
      <Section1>
        <Section2>
          <Div1>
            <H2>Reviews</H2>
            <Rating stylesDefault={stylesDefault} rating={rating} ratingCount={ratingCount} />
            <SizeAndFit stylesDefault={stylesDefault} fit={fit} />
            <Activities stylesDefault={stylesDefault} />
          </Div1>
          <ReviewForm productName={productName} imgUrl={imgUrl} reviews={reviews} />
        </Section2>
      </Section1>
    );
  }
}

ReviewComponent.propTypes = propTypes;
export default ReviewComponent;
