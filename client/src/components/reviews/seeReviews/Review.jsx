/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  productInfo: PropTypes.object,
  properties: PropTypes.object,
  author: PropTypes.string,
  body: PropTypes.string,
  rating: PropTypes.number,
};
const defaultProps = {
  title: 'missing',
  productInfo: { missing: 'missing' },
  properties: { missing: 'missing' },
  author: 'missing',
  body: 'missing',
  rating: 0,
};

const Review = (props) => {
  // Styles
  const Li = styled.li`
    display:flex;
    flex-directtion: row;
    font-family: 'Roboto', Sans Serif;
    font-weight: 500;
    color: #000000;
  `;
  const ReviewContent = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const B = styled.b`
    font-weight: 700;
  `;
  // Props
  const {
    title, productInfo, properties, rating, author, body,
  } = props;

  return (
    <Li>
      <ReviewContent>
        <B>{title}</B>
        <p>{body}</p>
      </ReviewContent>
    </Li>
  );
};

Review.propTypes = propTypes;
Review.defaultProps = defaultProps;
export default Review;
