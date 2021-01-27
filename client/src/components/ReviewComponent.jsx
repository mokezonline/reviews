/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DefaultStyles } from './ReviewSRC/StyledComponents/DefaultStyles';

const propTypes = {
  product: PropTypes.object,
  changeView: PropTypes.func.isRequired,
};
const defaultProps = {
  product: { missing: 'missing' },

};

class ReviewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    // Styles
    const { ReviewComponentMain, ContentComponents } = DefaultStyles;
    // Page and Containers
    const {
      ComponentRows,
      ComponentColumns,
      ContentContainer,
      ReviewButtonContainers,
    } = ReviewComponentMain;

    const ComponentTitleContainter = styled.div`
    width: 400px;
  `;
    // Content
    const {
      ContentTitle,
      ContentBody,
      ContentStats,
      QuestionIcon,
      SeeReviewsButton,
      WriteReviewsButton,
    } = ContentComponents;

    const ComponentTitle = styled.b`
      color: #ffffff;
      font-family: 'Roboto', Sans Serif;
      font-weight: 700;
      font-size: 18px;
    `;
    // Props
    const { changeView, product } = this.props;

    const {
      rating,
      ratingCount,
      fit,
    } = product;

    const basedText = `Based on ${ratingCount} user reviews`;

    return (
      <ComponentRows>
        <ComponentColumns>
          <ContentContainer>
            <ComponentTitleContainter>
              <ComponentTitle>Reviews</ComponentTitle>
            </ComponentTitleContainter>
            <div>
              <ContentTitle>
                <span>
                  {rating}
                </span>
                <span>
                  /5
                </span>
              </ContentTitle>
              <ContentBody>★★★★☆</ContentBody>
              <ContentStats>
                <span>
                  {basedText}
                </span>
                <QuestionIcon>?</QuestionIcon>
              </ContentStats>
            </div>
            <div>
              <ContentTitle>
                <span>
                  Size & Fit
                </span>
              </ContentTitle>
              <ContentBody>
                {fit}
              </ContentBody>
              <ContentStats>
                <span>
                  34% reviewers
                </span>
                <QuestionIcon>?</QuestionIcon>
              </ContentStats>
            </div>
            <div>
              <ContentTitle>
                <span>
                  Activities
                </span>
              </ContentTitle>
              <ContentBody>
                Casual Wear, Work, Hiking
              </ContentBody>
              <ContentStats>
                <span>
                  Popular amoung reviewers
                </span>
              </ContentStats>
            </div>
          </ContentContainer>
          <ReviewButtonContainers>
            <SeeReviewsButton onClick={() => changeView('seeReviews')}>See All Reviews</SeeReviewsButton>
            <WriteReviewsButton onClick={() => changeView('writeReviews')}>Write a Review</WriteReviewsButton>
          </ReviewButtonContainers>
        </ComponentColumns>
      </ComponentRows>
    );
  }
}

ReviewComponent.propTypes = propTypes;
ReviewComponent.defaultProps = defaultProps;
export default ReviewComponent;
