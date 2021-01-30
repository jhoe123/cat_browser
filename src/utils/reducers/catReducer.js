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
import { LIMIT_PERPAGE } from '../constants';

// initial state for cat reducer
const initState = {
    isLoading: true,
    breeds: [],                 // array of breeds
    page: 0,                    // page indexing for cat display
    currentBreed: null,         // current breed object that was selected
    cats: [],                   // arrays of cats for specific breed
    currentImage: null,
    hasNext: true,
    error: null,                // value when error found
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
            const hasNext = action.payload.length > 0 && 
                action.payload.length >= LIMIT_PERPAGE;
            return {...state,
                isLoading: false,
                hasNext: hasNext,
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
            return {...state, error: action.payload, isLoading: false}
        case ERROR_CLOSE:
            return {...state, error: null}
        default:
            return state;
    }
}

export default state;