import MessengerBox from '../../components/MessengersBox/';
import {deleteItemFlatList} from '../../actions/';
import {connect} from 'react-redux';


const mapStateToProps = state => {
    return{
        flatList : state.data
    }
};


const mapDispatchToProps = dispatch => {
    return{
        onDeleteee : (indexFlatList) => {
            return dispatch(deleteItemFlatList(indexFlatList));
        }
    };
};



export const MessengerBoxContainer =  connect(mapStateToProps, mapDispatchToProps)(MessengerBox);
