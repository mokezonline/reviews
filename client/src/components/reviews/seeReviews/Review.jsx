/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import { StylesModal } from '../StylesModal';

const Review = (props) => {
  // Props
  const { review } = props;
  const {
    title,
    productInfo,
    properties,
    rating,
    author,
    body,
  } = review;
  const {
    size,
    fit,
  } = productInfo;
  // Styles
  const {
    ReviewContainers,
    ReviewContent,
  } = StylesModal;
  // Page and containers
  const {
    ReviewContainer,
    ReviewHeaderContainer,
    ReviewAuthorContainer,
  } = ReviewContainers;
  // Content
  const {
    ReviewsContent,
    H1,
    H3,
    B,
    Stars,
    H4,
    Ul,
  } = ReviewContent;
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
  const parseProperties = (activities) => {
    const uses = activities.filter((value) => value !== 'recommended');
    return uses.join(', ');
  };
  const recommended = (activities) => (activities.includes('recommended') ? 'Yes' : 'No');
  return (
    <ReviewContainer>
      <ReviewsContent>
        <ReviewHeaderContainer>
          <Stars>{parseStars(rating)}</Stars>
          <div>{new Date().toLocaleDateString('en-us')}</div>
        </ReviewHeaderContainer>
        <H1>{title}</H1>
        <span>{body}</span>
      </ReviewsContent>
      <ReviewAuthorContainer>
        <H3>{author}</H3>
        <H4>verified buyer</H4>
        <Ul>
          <li><B>Size Purchased: </B> {size}</li>
          <li><B>Fit: </B> {fit}</li>
          <li><B>Used for: </B> {parseProperties(properties)}</li>
          <li><B>Likely to recommend: </B> {recommended(properties)}</li>
        </Ul>
      </ReviewAuthorContainer>
    </ReviewContainer>
  );
};

export default Review;
