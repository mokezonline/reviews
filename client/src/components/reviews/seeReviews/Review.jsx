/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Moment from 'moment';

const propTypes = {
  review: PropTypes.object,
  title: PropTypes.string,
  productInfo: PropTypes.object,
  properties: PropTypes.object,
  author: PropTypes.string,
  body: PropTypes.string,
  rating: PropTypes.number,
};
const defaultProps = {
  review: { missig: 'missing' },
  title: 'missing',
  productInfo: { missing: 'missing' },
  properties: { missing: 'missing' },
  author: 'missing',
  body: 'missing',
  rating: 0,
};

class Review extends React.Component {
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
    const stylesObj = {
      ReviewContainer: styled.div`
        color: #212529;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        width: 1321px;
        height: 343px;
        font-family: 'Roboto', Sans Serif;
        font-weight: 500;
      `,
      ReviewContent: styled.div`
        display: flex;
        padding: 10px;
        flex-direction: column;
        width: 829px;
        height: 263px;
        border-bottom: 2px solid #f5f5f5;
      `,
      ReviewContentHeader: styled.div`
        display: flex;
        justify-content: space-between;
        height: 21px;
      `,
      ReviewContentTitle: styled.h3`
        height: 25px;
        font-size: 21.5px;
        font-weight: 700;
      `,
      ReviewContentBody: styled.p`
        font-size: 15px;
      `,
      ReviewAuthor: styled.aside`
        padding: 10px;
        width: 426px;
        height: 263px;
        background-color: #f5f5f5;
        display: flex;
        flex-direction: column;
        justify-content: center;
      `,
      ReviewAuthorName: styled.h3`
        font-size: 18px;
      `,
      B: styled.b`
        font-weight: 700;
      `,
      Stars: styled.b`
        font-weight: 700;
        font-size: 25px;
      `,
    };
    const {
      ReviewContainer,
      ReviewContent,
      ReviewContentHeader,
      ReviewContentTitle,
      ReviewContentBody,
      ReviewAuthor,
      ReviewAuthorName,
      B,
      Stars,
    } = stylesObj;

    // Props
    const { review } = this.props;
    const {
      title, productInfo, properties, rating, author, body,
    } = review;
    const { size, fit } = productInfo;
    // Functions
    const parseStars = (score) => {
      const stars = [];
      let i = 1;
      for (i; i <= 5; i += 1) {
        if (i <= score) {
          stars.push('★');
        } else {
          stars.push('☆');
        }
      }
      return stars.join('');
    };
    const parseProperties = (props) => {
      const uses = props.filter((value) => value !== 'recommended');
      return uses.join(', ');
    };
    const recommended = (props) => (props.includes('recommended') ? 'Yes' : 'No');

    return (
      <ReviewContainer>
        <ReviewContent>
          <ReviewContentHeader>
            <Stars>{parseStars(rating)}</Stars>
            <ReviewContentBody>{new Date().toLocaleDateString('en-us')}</ReviewContentBody>
          </ReviewContentHeader>
          <ReviewContentTitle>{title}</ReviewContentTitle>
          <ReviewContentBody>{body}</ReviewContentBody>
        </ReviewContent>
        <ReviewAuthor>
          <ReviewAuthorName>{author}</ReviewAuthorName>
          <p><B>Size Purchased: </B> {size}</p>
          <p><B>Fit: </B> {fit}</p>
          <p><B>Used for: </B> {parseProperties(properties)}</p>
          <p><B>Product Recommended: </B> {recommended(properties)}</p>
        </ReviewAuthor>
      </ReviewContainer>
    );
  }
}

Review.propTypes = propTypes;
Review.defaultProps = defaultProps;
export default Review;
