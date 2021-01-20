import React from 'react';
import styled from 'styled-components';
import Rating from './reviews/Rating';
import SizeAndFit from './reviews/SizeAndFit';
import Activities from './reviews/Activities';

class ReviewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const stylesDefault = {
      Section: styled.section`
        width: 100%;
        height: 599px;
        background-color: #000000;
        color: #ffffff;
        font-size: 14px;
        line-heightL 24.5px;
        text-align: left;
      `,
      Div1: styled.div`
        width: 100%;
        height: 152px;
        align-items: flex-start;
        display: flex;
        font-size: 14px;
        justify-content: flex-start;
        line-height: 24.5px;
        text-align: left;
      `,
      Div2: styled.div`
      width: 267px;
      height: 60px;
      color: #ffffff;
      font-family: 'Roboto', Sans Serif;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: -0.2px;
      line-height: 24px;
      text-align: left;
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
        font-family: 'Roboto', sans-serif;
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
      border-radius: 100%;
      display: inline;
      margin: 10px;
      font-size: 12px;
      letter-spacing: -0.24px;
      line-height: 24px;
      text-align: left;
      `,
    };

    const { H2 } = stylesDefault;
    const { Section } = stylesDefault;
    const { Div1 } = stylesDefault;
    return (
      <Section>
        <Div1>
          <H2>Reviews</H2>
          <Rating stylesDefault={stylesDefault} />
          <SizeAndFit stylesDefault={stylesDefault} />
          <Activities stylesDefault={stylesDefault} />
        </Div1>
      </Section>
    );
  }
}

export default ReviewComponent;
