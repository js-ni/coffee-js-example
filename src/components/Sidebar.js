import React, { Component } from 'react';
import { Link } from 'found';
import styled from 'styled-components';
import './Sidebar.css'

const List = styled.ul`
  width: 250px;
  float: left;
  background-color: #333333;
  margin: 0;
  padding: 0;
  text-align: left;
`;

const Item = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  color: #FFFFFF;
  padding: 12px;
`;

class Sidebar extends Component {
  render() {
    return (
      <List>
        <Item>
          <Link to="/" className="link">
            Home
          </Link>
        </Item>
        <Item>
          <Link to="/events" className="link">
            Events
          </Link>
        </Item>
      </List>
    );
  }
}

export default Sidebar;
