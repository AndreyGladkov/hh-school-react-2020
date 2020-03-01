import React from 'react';
import { connect } from 'react-redux';
import  CatalogSection  from './catalog-section';
import { requestAction } from './catalog-action';

function mapStateToProps(state) {
    return { ...state };
}

function mapDispatchToProps(dispatch) {
    return { requestAction: () => dispatch(requestAction)};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CatalogSection);
