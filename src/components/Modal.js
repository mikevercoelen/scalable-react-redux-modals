import React, { Component, PropTypes } from 'react';

export default class Modal extends Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    onClose: PropTypes.func
  };

  listenKeyboard = (event) => {
    if (event.key === 'Escape' || event.keyCode === 27) {
      this.props.onClose();
    }
  };

  componentDidMount () {
    if (this.props.onClose) {
      window.addEventListener('keydown', this.listenKeyboard, true);
    }
  }

  componentWillUnmount () {
    if (this.props.onClose) {
      window.removeEventListener('keydown', this.listenKeyboard, true);
    }
  }

  get title () {
    const { title } = this.props;

    return title ? (
      <div className='modal__title'>
        <h1>{title}</h1>
      </div>
    ) : null;
  }

  get close () {
    const { onClose } = this.props;

    return onClose ? (
      <div className='modal__close' onClick={onClose} />
    ) : null;
  }

  render () {
    return (
      <div className='modal'>
        <div className='modal__overlay' />
        <div className='modal__content'>
          <div className='modal__dialog'>
            <div className='modal__header'>
              {this.title}
              {this.close}
            </div>
            <div className='modal__body'>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
