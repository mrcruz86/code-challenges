import { connect } from 'react-redux';
import { FilterSelector } from '../components';
import { getItems } from '../actions';

const mapStateToProps = (state) => {
    return {
        filters: state.filterState.filters,
        activeFilter: state.activeFilter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (filter) => {
            dispatch(getItems(filter));
        }
    };
};

const AvailableFilters = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterSelector);

export default AvailableFilters;
