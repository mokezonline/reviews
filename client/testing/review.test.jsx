import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReviewComponent from '../src/components/ReviewComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('<ReviewComponent />', () => {
  it('should accept a reviews prop', () => {
    const reviews = [{ test: 'test' }];
    const wrapper = mount(<ReviewComponent reviews={reviews} />);
    expect(wrapper.props().reviews).toEqual(reviews);
  });
  it('should contain an item component', () => {
    const reviews = [{ test: 'test' }, { test: 'test1' }];
    const wrapper = shallow(<ReviewComponent reviews={reviews} />);
    expect(wrapper.find('div')).to.have.lengthOf(reviews.length);
  });
});
