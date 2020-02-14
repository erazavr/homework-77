import axiosApi from "../axiosApi";

export const FETCH_MESSAGE_SUCCESS = 'FETCH_MESSAGE_SUCCESS';
export const FETCH_MESSAGE_REQUEST = 'FETCH_MESSAGE_REQUEST';
export const FETCH_MESSAGE_FAILURE = 'FETCH_MESSAGE_FAILURE';

export const fetchMessagesSuccess = message => ({type: FETCH_MESSAGE_SUCCESS, message});
export const fetchMessageRequest = () => ({type: FETCH_MESSAGE_REQUEST});
export const fetchMessageFailure = error => ({type: FETCH_MESSAGE_FAILURE, error});

export const getMessages = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchMessageRequest())
            const response = await axiosApi.get('/messages');
            dispatch(fetchMessagesSuccess(response.data))
        } catch (e) {
            dispatch(fetchMessageFailure(e))
        }

    }
};

export const postMessage = message => {
    return async (dispatch) => {
        try {
            dispatch(fetchMessageRequest())
            await axiosApi.post('/messages', message);
            dispatch(getMessages())
        } catch (e) {
            dispatch(fetchMessageFailure(e))
        }

    }
};