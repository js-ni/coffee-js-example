import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #333333;
  color: #FFFFFF;
  height: 60px;
  text-align: left;
  line-height: 60px;
  padding: 10px;
`;

class Header extends Component {
  render() {
    return (
      <Container>
        SOY UN Logo
      </Container>
    );
  }
}

export default Header;
