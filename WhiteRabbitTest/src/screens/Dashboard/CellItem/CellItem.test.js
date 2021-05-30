

import React from 'react';
import { shallow } from 'enzyme';
import CellItem from "./CellItem";


describe('<CellItem/>', () => {
  const company = {name: "whiteRabbit"}
  const props = {
    data: {company: company, name:'Anz', profile_image:'https://randomuser.me/api/portraits/men/1.jpg'},
    onPress: jest.fn
  };

  const wrapper = shallow(<CellItem {...props} />);

  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without blowing up', () => {
    expect(wrapper.length).toEqual(1);
  });
});
