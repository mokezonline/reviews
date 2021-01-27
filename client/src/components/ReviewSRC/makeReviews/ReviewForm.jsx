import React from 'react';
import $ from 'jquery';
import { ModalStyles } from '../StyledComponents/ModalStyles';
import FadeIn from '../animations/FadeIn';
import RatingStars from '../animations/RatingStars';
import ReviewBody from './ReviewBody';
import UserInfo from './UserInfo';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
    this.starHandler = this.starHandler.bind(this);
    this.handleRecommended = this.handleRecommended.bind(this);
  }

  handleRecommended(event) {
    event.preventDefault();
    $(event.target).toggleClass('selected');
    console.log(event.target.className)
  }

  starHandler(index, callback) {
    this.setState({
      rating: index,
    });
    callback();
  }

  render() {
    // Props
    const { changeView, imgUrl, productName } = this.props;
    // Styling
    const {
      ReviewContainers,
      ReviewContent
    } = ModalStyles;
    // Page and containers
    const {
      ModalContainer,
      Overlay,
      ExitButtonContainer,
      WriteReviewsContainer,
      ProductInfoContainer,
      OverallRatingContainer,
    } = ReviewContainers;
    // Content
    const {
      ExitButton,
      H1,
      H3,
      H4,
      Img,
      ActivityButton,
    } = ReviewContent;

    return (
      <FadeIn delay={250} duration={300}>
        <ModalContainer>
          <Overlay onClick={() => changeView('null')} />
          <ExitButtonContainer>
            <ExitButton onClick={() => changeView('null')}>
              <u>Close (x)</u>
            </ExitButton>
          </ExitButtonContainer>
          <WriteReviewsContainer>
            <ProductInfoContainer>
              <H1>Write your Review</H1>
              <H3>{productName}</H3>
              <Img src={imgUrl} />
              <H4>Product image color may not be shown in color purchased</H4>
              <UserInfo />
              <OverallRatingContainer>
                <div>
                  <H1>Overall Rating:</H1>
                  <RatingStars starHandler={this.starHandler} />
                </div>
                <div>
                  <H1>Likely to recommend?</H1>
                  <div>
                    <ActivityButton onClick={this.handleRecommended}>Yes</ActivityButton>
                    <ActivityButton onClick={this.handleRecommended}>No</ActivityButton>
                  </div>
                </div>
              </OverallRatingContainer>
            </ProductInfoContainer>
            <ProductInfoContainer>
              <ReviewBody changeView={changeView} />
            </ProductInfoContainer>
          </WriteReviewsContainer>
        </ModalContainer>
      </FadeIn>
    );
  }
}

export default ReviewForm;
