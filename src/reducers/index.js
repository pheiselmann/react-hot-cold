import * as actions from '../actions';

const initialState = {
	guesses: [1, 100, 50, 25],
	feedback: 'Sorry, that is not right',
	auralStatus: '',
	correctAnswer: -1
};

export const hotColdReducer = (state=initialState, action) => {

	if (action.type === actions.MAKE_GUESS) {
		return Object.assign({}, state, {
			guesses: [...state.guesses, { action.guess }]
		});
	}

	return state;

};