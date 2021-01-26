/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import { StylesDefault } from './reviews/StylesDefault';
import ReviewModals from './reviews/ReviewModals';

class ReviewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    // Styles
    const { ReviewComponentMain, ContentComponents } = StylesDefault;
    // Page and Containers
    const {
      ComponentRows,
      ComponentColumns,
      ContentContainer,
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
      productName,
      imgUrl,
      rating,
      ratingCount,
      fit,
      reviews,
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
          <ReviewModals
            productName={productName}
            imgUrl={imgUrl}
            reviews={reviews}
            changeView={changeView}
          />
        </ComponentColumns>
      </ComponentRows>
    );
  }
}

export default ReviewComponent;
