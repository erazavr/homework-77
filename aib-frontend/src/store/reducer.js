import {FETCH_MESSAGE_SUCCESS} from "./action";

const initalState = {
  messages: []
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case FETCH_MESSAGE_SUCCESS:
            return {...state, messages: action.message};
        default:
            return state
    }
};


export default reducer