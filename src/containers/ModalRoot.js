import React from 'react';
import { connect } from 'react-redux';

import Notification from './modals/Notification';

import { MODAL_TYPE_NOTIFICATION } from '../constants/ModalTypes';

const MODAL_COMPONENTS = {
  [MODAL_TYPE_NOTIFICATION]: Notification
};

const ModalRoot = ({ type, props }) => {
  if (!type) {
    return null;
  }

  console.log(type);

  const ModalComponent = MODAL_COMPONENTS[type];
  return <ModalComponent {...props} />;
};

export default connect(state => state.modal)(ModalRoot);
