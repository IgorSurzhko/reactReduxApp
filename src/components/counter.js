import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {bindActionCreators} from 'redux';

const Counter = ({counter, inc, dec, rnd, res}) => {
    return (
        <div className="jumbotron">     
            <h1>{counter}</h1>
            <button onClick={inc} className='btn btn-primary'>INC</button>&ensp;
            <button onClick={dec} className='btn btn-primary'>DEC</button>&ensp;
            <button onClick={rnd} className='btn btn-primary'>RND</button>&ensp;
            <button onClick={res} className='btn btn-primary'>RES</button>
        </div>
    )
} 
const mapStateToProps = (state) => {
    return {
        counter: state
    }
}
const mapDispatchToProps = (dispatch) => {
    const {inc, dec, rnd, res} = bindActionCreators(actions, dispatch);
    return {
        inc,
        dec,
        rnd: () => {
            const value = Math.floor(Math.random() * 10);
            rnd(value)
        },
        res
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);