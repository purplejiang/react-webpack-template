import { createActions } from 'redux-actions';

const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  ADDNUMBER: 'ADDNUMBER'
};

const { increment, decrement, addnumber } = createActions({
  [actionTypes.INCREMENT]: payload => payload,
  [actionTypes.DECREMENT]: payload => payload,
  [actionTypes.ADDNUMBER]: payload => payload
});

// const increment = () => ({ type: actionTypes.INCREMENT });

// const decrement = () => ({ type: actionTypes.DECREMENT });

export { actionTypes, increment, decrement, addnumber };
