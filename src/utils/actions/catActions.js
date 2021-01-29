import axios from 'axios';
import { 
    LIMIT_PERPAGE,
    CAT_API_KEY, 
    CAT_BREEDLIST_ENDPOINT, 
    CAT_SEARCH_ENDPOINT } from '../constants';
import { 
    START_RETRIEVE_CATS,
    START_RETRIEVE_BREED,
    DONE_RETRIEVE_BREED,
    DONE_RETRIEVE_CATS,
} from './actionTypes';

// retrieve all cat breeds
export function fetchCatBreeds() {
    return (dispatch) => {
        dispatch({type: START_RETRIEVE_BREED });
        axios.get(CAT_BREEDLIST_ENDPOINT, {
            headers: { apiKey: CAT_API_KEY}
        })
        .then(response => {
            dispatch({type: DONE_RETRIEVE_BREED, payload: response.data})
        })
        .catch(err =>{

        });
    }
}

// use to load cats
// @param breed: the object definition of breed. if null then it will load the current selected
// @param page: which page it will load
export function loadCats(breed = null, page = 0) {
    return (dispatch, getState) => {
        if (breed === null) {
            breed = getState().currentBreed;
        }
        dispatch({type: START_RETRIEVE_CATS, payload: breed, page: page});
        axios.get(CAT_SEARCH_ENDPOINT + "?breed_id=" + breed.id + "&page=" + page + "&limit=" + LIMIT_PERPAGE + "&order=ASC", {
            headers: { apiKey: CAT_API_KEY}
        })
        .then(response => {
            dispatch({type: DONE_RETRIEVE_CATS, payload: response.data})
        })
        .catch(err =>{

        });
    }
}

export function checkAuthenticate(onContinue) {
    return (dispatch, getState) => {
        const { isAuthenticated } = getState();
        if (isAuthenticated) {

        }
    }
}