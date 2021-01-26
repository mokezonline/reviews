import React from 'react';
import { StylesModal } from '../StylesModal';
// import PropTypes from 'prop-types';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      email: '',
    };
  }

  render() {
    // Styles
    const { ReviewContainers, ReviewContent } = StylesModal;
    // Page and containers
    const {
      Form,
      Div,
      UserInfoContainer,
    } = ReviewContainers;
    // Content
    const {
      Input,
      H2,
    } = ReviewContent;
    const { author, email } = this.state;

    return (
      <UserInfoContainer>
        <H2>*Required</H2>
        <Form>
          <Input type="text" value={author} name="author" onChange={this.onChange} placeholder="Your name(*)" />
          <Input type="text" value={email} name="email" onChange={this.onChange} placeholder="Your email(*)" />
        </Form>
      </UserInfoContainer>
    );
  }
}

export default UserInfo;
