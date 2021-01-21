import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Review from './Review';

const propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  reviews: PropTypes.array,
};

const defaultProps = {
  reviews: ['missing'],
};

const ReviewList = (props) => {
  const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.5);
    z-index: 2;
    cursor: pointer;
  `;
  const { reviews } = props;
  return (
    <Overlay>
      <ul>
        {reviews.map((review, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Review review={review} key={index} />
        ))}
      </ul>
    </Overlay>
  );
};

ReviewList.propTypes = propTypes;
ReviewList.defaultProps = defaultProps;
export default ReviewList;
