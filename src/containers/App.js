import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../actions/modal';
import { MODAL_TYPE_NOTIFICATION, MODAL_TYPE_CONFIRMATION } from '../constants/ModalTypes';
import ModalRoot from './ModalRoot';

@connect(null, { showModal })
export default class Application extends Component {
  showNotification = () => {
    this.props.showModal(MODAL_TYPE_NOTIFICATION, {
      title: 'This is an awesome notification.'
    });
  };

  showConfirm = () => {
    this.props.showModal(MODAL_TYPE_CONFIRMATION, {
      title: 'Do you confirm?',
      onConfirm: (isConfirmed) => {
        console.log('isConfirmed: ' + isConfirmed);
      }
    });
  };

  render () {
    return (
      <div>
        <div>
          <button onClick={this.showNotification}>
            Show modal
          </button>
          <button onClick={this.showConfirm}>
            Show confirm
          </button>
        </div>
        <ModalRoot />
      </div>
    )
  }
}
