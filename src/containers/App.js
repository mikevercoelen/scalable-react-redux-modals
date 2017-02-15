import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../actions/modal';
import { MODAL_TYPE_NOTIFICATION } from '../constants/ModalTypes';
import ModalRoot from './ModalRoot';

@connect(null, { showModal })
export default class Application extends Component {
  showModal = () => {
    this.props.showModal(MODAL_TYPE_NOTIFICATION, {
      title: 'This is an awesome notification.'
    });
  };

  render () {
    return (
      <div>
        <div>
          <button onClick={this.showModal}>
            Show modal
          </button>
        </div>
        <ModalRoot />
      </div>
    )
  }
}
