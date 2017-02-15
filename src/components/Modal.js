import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, .65);
`;

const Content = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
  overflow: auto;
  text-align: center;
  overflow-scrolling: touch;
  padding: 4px;
  cursor: pointer;

  &:after {
    vertical-align: middle;
    display: inline-block;
    height: 100%;
    margin-left: -.05em;
    content: '';
  }
`;

const Dialog = styled.div`
  position: relative;
  outline: 0;
  width: 100%;
  background: white;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  max-width: 520px;
  cursor: default;
`;

const Header = styled.div`
  padding: 16px 8px 8px 8px
`;

const Body = styled.div`
  padding-bottom: 16px
`;

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

  onOverlayClick = () => {
    this.props.onClose();
  };

  onDialogClick = (event) => {
    event.stopPropagation();
  };

  render () {
    return (
      <div className='modal'>
        <Overlay />
        <Content onClick={this.onOverlayClick}>
          <Dialog onClick={this.onDialogClick}>
            <Header>
              {this.title}
              {this.close}
            </Header>
            <Body>
              {this.props.children}
            </Body>
          </Dialog>
        </Content>
      </div>
    );
  }
}
