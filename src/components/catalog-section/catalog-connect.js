import React from 'react';
import { connect } from 'react-redux';
import  CatalogSection  from './catalog-section';
import { requestAction, showOrderFormAction } from './catalog-action';

function mapStateToProps(state) {
    return { ...state };
}

function mapDispatchToProps(dispatch) {
    return { 
        requestAction: () => dispatch(requestAction), 
        showOrderFormAction: (productInd, sizeInd) => dispatch(showOrderFormAction(productInd, sizeInd))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CatalogSection);
