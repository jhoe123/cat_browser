import axios from 'axios';
import _ from 'lodash';
import { 
    LIMIT_PERPAGE,
    CAT_API_KEY, 
    CAT_BREEDLIST_ENDPOINT, 
    CAT_IMAGE_ENDPOINT,
    CAT_SEARCH_ENDPOINT } from '../constants';
import { 
    START_RETRIEVE_CATS,
    START_RETRIEVE_BREED,
    DONE_RETRIEVE_BREED,
    DONE_RETRIEVE_CATS,
    START_RETRIEVE_IMG,
    DONE_RETRIEVE_IMG,
    ERROR_FOUND,
    SKIP_LOAD
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
            dispatch({type: ERROR_FOUND, payload: err})
        });
    }
}

// load cat image
export function loadCatImage(imageId) {
    return (dispatch) => {
        dispatch({type: START_RETRIEVE_IMG});
        const url = CAT_IMAGE_ENDPOINT + "/" + imageId;
        axios.get(url, {
            headers: { 'x-api-key': CAT_API_KEY}
        })
        .then(response => {
            //console.log(response)
            dispatch({type: DONE_RETRIEVE_IMG, payload: response.data})
        })
        .catch(err =>{
            dispatch({type: ERROR_FOUND, payload: err})
        });
    }
}

// use to load cats
// @param breed: breed id.
// @param page: which page it will load
export function loadCatsById(breed = null, page = 0) {
    return (dispatch, getState) => {
        var breeds = getState().breeds;
        var index = _.findIndex(breeds, (item) => item.id === breed);
        if (index > 0)
            dispatch(loadCats(breeds[index], page));
        else
            dispatch({type:SKIP_LOAD});
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
        const url = CAT_SEARCH_ENDPOINT + "?breed_id=" + breed.id + "&page=" + page + "&limit=" + LIMIT_PERPAGE + "&order=ASC";
        axios.get(url, {
            headers: { 'x-api-key': CAT_API_KEY}
        })
        .then(response => {
            //console.log(response)
            dispatch({type: DONE_RETRIEVE_CATS, payload: response.data})
        })
        .catch(err =>{
            dispatch({type: ERROR_FOUND, payload: err})
        });
    }
}
