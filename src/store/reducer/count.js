import { actionTypes } from '../actions/count';
import { handleActions } from 'redux-actions';

const initState = {
  count: 0
};
const counterReducer = handleActions(
  {
    [actionTypes.INCREMENT]: (state, action) => {
      console.log(action);
      return { count: state.count + 1 };
    },
    [actionTypes.DECREMENT]: state => ({ count: state.count - 1 }),
    [actionTypes.ADDNUMBER]: (state, { payload }) => ({ count: state.count + payload })
  },
  initState
);

export { counterReducer };

// function reduce(state = initState, action) {
//   switch (action.type) {
//     case actionTypes.INCREMENT:
//       return { count: state.count + 1 };
//     case actionTypes.DECREMENT:
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// }

// export default reduce;
