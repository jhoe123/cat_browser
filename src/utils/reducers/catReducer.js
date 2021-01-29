import { 
    START_RETRIEVE_BREED,
    START_RETRIEVE_CATS,
    DONE_RETRIEVE_CATS,
    DONE_RETRIEVE_BREED
} from '../actions/actionTypes';

// initial state for cat reducer
const initState = {
    isLoading: true,
    breeds: [],
    page: 0,
    currentBreed: null,
    cats: []
}

const state = (state = initState, action) => {
    switch (action.type) {
        case START_RETRIEVE_CATS:
            return {...state, 
                isLoading: true,
                currentBreed: action.payload,
                page: action.page
            }
        case DONE_RETRIEVE_CATS:
            return {...state,
                isLoading: false,
                cats: [...state.cats, action.payload]
            }
        case START_RETRIEVE_BREED:
            return {...state, isLoading: true, page: -1}
        case DONE_RETRIEVE_BREED:
            return {...state, 
                isLoading: false, 
                breeds: action.payload
            }
    }
    return state;
}

export default state;