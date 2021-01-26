import React from 'react';
import { StylesModal } from '../StylesModal';

class ReviewBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    // Styles
    const {
      ReviewContainers,
      ReviewContent,
    } = StylesModal;
    // Page and containers
    const {
      Form,
      UsesAndSizeContainer,
      Div,
      ReviewBodyContainer,
    } = ReviewContainers;
    const {
      H3,
      Input,
      ActivityButton,
      Select,
      Option,
      PlaceHolderOption,
      TextArea,
    } = ReviewContent;

    return (
      <Form>
        <br />
        <H3>This product is best used for:</H3>
        <UsesAndSizeContainer>
          <Div>
            <ActivityButton type="submit" value="Casual-Wear">Casual-Wear</ActivityButton>
            <ActivityButton type="submit" value="Climbing">Climbing</ActivityButton>
            <ActivityButton type="submit" value="Hiking">Hiking</ActivityButton>
          </Div>
          <Select type="submit" name="Size">
            <PlaceHolderOption name="placeholder" value="null">Select the size you purchased</PlaceHolderOption>
            <Option name="XS" value="XS">XS</Option>
            <Option name="S" value="S">S</Option>
            <Option name="M" value="M">M</Option>
            <Option name="L" value="L">L</Option>
            <Option name="XL" value="XL">XL</Option>
          </Select>
        </UsesAndSizeContainer>
        <UsesAndSizeContainer>
          <Div>
            <ActivityButton type="Submit" value="Yoga">Yoga</ActivityButton>
            <ActivityButton type="Submit" value="Running">Running</ActivityButton>
            <ActivityButton type="Submit" value="Biking">Biking</ActivityButton>
          </Div>
          <Select type="submit" name="Height">
            <PlaceHolderOption name="placeholder" value="null">Select your height</PlaceHolderOption>
            <Option name="tall" value="Tall">Tall</Option>
            <Option name="average" value="Average">Average</Option>
            <Option name="short" value="Short">Short</Option>
          </Select>
        </UsesAndSizeContainer>
        <UsesAndSizeContainer>
          <Div>
            <ActivityButton type="Submit" value="Ski/Snow">Ski/Snow</ActivityButton>
            <ActivityButton type="Submit" value="Surfing">Surfing</ActivityButton>
            <ActivityButton type="Submit" value="Work">Work</ActivityButton>
          </Div>
          <Select type="submit" name="Fit" placeholder="How would you rate the fit?">
            <PlaceHolderOption name="placeholder" value="null">How would you rate the fit?</PlaceHolderOption>
            <Option name="Perfect" value="Perfect">Perfect</Option>
            <Option name="Good" value="Good">Good</Option>
            <Option name="Loose" value="Loose">Loose</Option>
            <Option name="Tight" value="Tight">Tight</Option>
          </Select>
        </UsesAndSizeContainer>
        <ReviewBodyContainer>
          <Input type="text" name="Title" placeholder="Review Title (e.g. Super Warm)(*)" />
          <TextArea type="text" name="Body" placeholder="Write a detailed review here. Tell us   and other customers what's working for you and what isn't. (*)" />
        </ReviewBodyContainer>
      </Form>
    );
  }
}

export default ReviewBody;
