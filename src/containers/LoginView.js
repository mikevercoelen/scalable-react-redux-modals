import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../actions/modal';
import { MODAL_TYPE_NOTIFICATION, MODAL_TYPE_CONFIRMATION } from '../constants/ModalTypes';

@connect(null, { showModal })
export default class LoginView extends Component {
  showNotification = () => {
    this.props.showModal(MODAL_TYPE_NOTIFICATION, {
      title: 'This is an awesome notification.'
    });
  };

  showConfirm = () => {
    this.props.showModal(MODAL_TYPE_CONFIRMATION, {
      title: 'Do you confirm?',
      onConfirm: (isConfirmed) => {
        this.props.showModal(MODAL_TYPE_NOTIFICATION, {
          title: 'The user did confirm: ' + isConfirmed
        });
      }
    });
  };

  render () {
    return (
      <div>
        <button onClick={this.showNotification}>
          Show modal
        </button>
        <button onClick={this.showConfirm}>
          Show confirm
        </button>
      </div>
    )
  }
}
