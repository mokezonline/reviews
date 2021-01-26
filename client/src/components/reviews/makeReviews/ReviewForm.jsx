import React from 'react';
import { StylesModal } from '../StylesModal';
import FadeIn from '../animations/FadeIn';
import RatingStars from '../animations/RatingStars';

import ReviewBody from './ReviewBody';
import UserInfo from './UserInfo';
// import RatingFields from './RatingFields';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
    this.starHandler = this.starHandler.bind(this);
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
    // Styling'
    const { ReviewContainers, ReviewContent } = StylesModal;
    const {
      ModalContainer,
      Overlay,
      ExitButtonContainer,
      WriteReviewsContainer,
      ProductInfoContainer,
      OverallRatingContainer,
    } = ReviewContainers;
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
                    <ActivityButton>Yes</ActivityButton>
                    <ActivityButton>No</ActivityButton>
                  </div>
                </div>
              </OverallRatingContainer>
            </ProductInfoContainer>
            <ProductInfoContainer>
              <ReviewBody />
            </ProductInfoContainer>
          </WriteReviewsContainer>
        </ModalContainer>
      </FadeIn>
    );
  }
}

// ReviewForm.propTypes = propTypes;
// ReviewForm.defaultProps = defaultProps;
export default ReviewForm;
