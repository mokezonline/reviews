import React from 'react';
import { StylesModal } from '../StylesModal';
import FadeIn from '../animations/FadeIn';
import RatingStars from '../animations/RatingStars';

// import ReviewBody from './ReviewBody';
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
    } = ReviewContainers;
    const {
      ExitButton,
      H1,
      H3,
      H4,
      Img,
      CenteredSpan,
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
              <H1><CenteredSpan>Write your Review</CenteredSpan></H1>
              <H3><CenteredSpan>{productName}</CenteredSpan></H3>
              <CenteredSpan><Img src={imgUrl} /></CenteredSpan>
              <CenteredSpan>
                <H4>Product image color may not be shown in color purchased</H4>
              </CenteredSpan>
              <CenteredSpan><UserInfo /></CenteredSpan>
              <CenteredSpan><RatingStars starHandler={this.starHandler} /></CenteredSpan>
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
