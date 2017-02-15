import { SHOW_MODAL, HIDE_MODAL } from '../constants/ActionTypes';

const initialState = {
  type: null,
  props: {}
};

function modalReducer (state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      console.log(action);

      return {
        ...state,
        type: action.payload.type,
        props: action.payload.props
      };
    case HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
}

export default modalReducer;
