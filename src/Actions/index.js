import axios from 'axios'; 

export const GET_JOKE = 'GET_JOKE' ;

export const GET_SETUP_SUCCESS =  'GET_SETUP_SUCCESS' ;

export const GET_PUNCHLINE_SUCCESS = 'GET_PUNCHLINE_SUCCESS';

export const GET_JOKE_ERROR = 'GET_JOKE_ERROR' ; 

export const FETCHING = 'FETCHING' ;


export const getJoke = () => dispatch => {

    dispatch(setIsFetching(true)) ; 

    axios.get ('https://official-joke-api.appspot.com/jokes/programming/random')

        .then( (res) => {
            const setup = res.data[0].setup ;
            const punchline = res.data[0].punchline;

            dispatch(getSetUpSuccess(setup));
            dispatch(getPunchLineSucess(punchline));
            
        })
        .catch( (err) => {
            dispatch(getJokeErr(err.error))
        })

}

const setIsFetching = (isFetching) => {
    return {
        type: FETCHING,
        payload: isFetching
    }
}

const getSetUpSuccess = (setup) => {
    return {
        type: GET_SETUP_SUCCESS,
        payload: setup
    }
}

const getPunchLineSucess = (punchline) => {
    return {
        type: GET_PUNCHLINE_SUCCESS,
        payload: punchline
    }
}

const getJokeErr = (err) => {
    return {
        type: GET_JOKE_ERROR,
        payload: err 
    }
}