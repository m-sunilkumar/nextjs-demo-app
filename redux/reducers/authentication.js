import { SET_AUTHENTICATED } from "../actionTypes";

const initialState = {
  isAuthenticated: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED: {
      // const { isAuthenticated } = action.payload;
      return {
        ...state,
        isAuthenticated: !state.isAuthenticated
      };
    }
    default:
      return state;
  }
}