import React from 'react';
import { connect } from 'react-redux' ;
import { getJoke } from '../Actions';

const Joke = (props) => {

    // if (props.error) {
    //     return <h2>We got an error: {props.error}</h2>;
    //   }
    
    //   if (props.isFetching) {

    //     return  <h2>Fetching person for ya!</h2> 
    //   }
    

    return (
        <div>
            <h2> {props.setUp} </h2>
            <h2> {props.punchLine}</h2>
            <button onClick={() => {props.getJoke()}}>Get Joke</button>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        setUp: state.setUp,
        punchLine: state.punchLine,
        isFetching: state.isFetching,
        error: state.err
    }
}

export default connect (mapStateToProps, {getJoke})(Joke)