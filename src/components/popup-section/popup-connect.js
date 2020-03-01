import React from 'react';
import { connect } from 'react-redux';
import  PopupSection  from './popup-section';
import { openFormAction } from './popup-action';

function mapStateToProps(state) {
    return { ...state };
}

function mapDispatchToProps(dispatch) {
    return { openFormAction: () => dispatch(openFormAction)};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CatalogSection);
