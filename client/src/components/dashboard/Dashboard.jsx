import React, { Component } from 'react';
import styled from 'styled-components';

import Navbar from './Navbar';

export default class Dashboard extends Component {
  render() {
      return <Container>
          <Navbar>
              
          </Navbar>
      </Container>;
  }
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
`
