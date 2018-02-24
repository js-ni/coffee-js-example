import React, { Component } from 'react';
import styled from 'styled-components';
import Card from 'react-md-card';

const Container = styled.div`
  margin-left: 250px;
  background-color: #cccccc;
`;

class Page extends Component {
  render() {
    return (
      <Container>
        <Card>
          {this.props.children}
        </Card>
      </Container>
    );
  }
}

export default Page;
