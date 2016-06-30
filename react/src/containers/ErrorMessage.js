import { connect } from 'react-redux';

import { Error } from '../components';
import { clearError } from '../actions';

const mapStateToProps = (state) => {
    return {
        isError: state.error.isError
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onErrorClick: () => {
            dispatch(clearError());
        }
    };
};

const ErrorMessage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Error);

export default ErrorMessage;
