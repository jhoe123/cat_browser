import _ from 'lodash';
import { 
    START_RETRIEVE_BREED,
    START_RETRIEVE_CATS,
    DONE_RETRIEVE_CATS,
    DONE_RETRIEVE_BREED,
    ERROR_FOUND,
    ERROR_CLOSE,
    START_RETRIEVE_IMG,
    DONE_RETRIEVE_IMG,
    SKIP_LOAD
} from '../actions/actionTypes';

// initial state for cat reducer
const initState = {
    isLoading: true,
    breeds: [],
    page: 0,
    currentBreed: null,
    cats: [],
    currentImage: null,
    hasNext: true,
    error: 'asdas'
}

const state = (state = initState, action) => {
    switch (action.type) {
        case START_RETRIEVE_CATS:
            return {...state, 
                isLoading: true,
                cats: state.currentBreed === action.payload ? state.cats : [],
                currentBreed: action.payload,
                page: action.page
            }
        case DONE_RETRIEVE_CATS:
            return {...state,
                isLoading: false,
                hasNext: action.payload.length > 0,
                cats: _.concat(state.cats, action.payload)
            }
        case SKIP_LOAD:
            return {...state, isLoading: false, hasNext: false}
        case START_RETRIEVE_BREED:
            return {...state, isLoading: true, page: -1}
        case DONE_RETRIEVE_BREED:
            return {...state, 
                isLoading: false, 
                breeds: action.payload
            }
        case START_RETRIEVE_IMG:
            return {...state, isLoading: true}
        case DONE_RETRIEVE_IMG:
            return {...state, isLoading: false, currentImage: action.payload}
        case ERROR_FOUND:
            return {...state, error: action.payload}
        case ERROR_CLOSE:
            return {...state, error: null}
    }
    return state;
}

export default state;