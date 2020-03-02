import React from 'react';
import { connect } from 'react-redux';
import  PopupSection  from './popup-section';
import { closeOrderFormAction } from './popup-action';

function mapStateToProps(state) {
    return { ...state };
}

function mapDispatchToProps(dispatch) {
    return { closeOrderFormAction: () => dispatch(closeOrderFormAction)};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PopupSection);
