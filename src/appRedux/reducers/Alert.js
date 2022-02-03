import { alertConstant } from "../constants";

const initialState = {
	severity: "",
	msg: "",
};

const alertReducer = (state = initialState, action) => {
	switch (action.type) {
		case alertConstant.ADD:
			return {
				...state,
				msg: action.data.msg,
				severity: action.data.type,
			};
		case alertConstant.REMOVE:
			return initialState;
		default:
			return state;
	}
};

export default alertReducer;
