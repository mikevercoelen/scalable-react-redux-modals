import React, { Component } from 'react';
import ModalRoot from './ModalRoot';

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
