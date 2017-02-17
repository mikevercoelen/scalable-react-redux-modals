import React, { Component } from 'react';
import ModalRoot from './ModalRoot';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    font-family: sans-serif;
  }
`;

export default class Application extends Component {
  render () {
    return (
      <div>
        <div>
          {this.props.children}
        </div>
        <ModalRoot />
      </div>
    )
  }
}
