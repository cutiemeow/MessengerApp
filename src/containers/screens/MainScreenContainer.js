import MainScreen from '../../components/screens/MainScreen';
import {connect} from 'react-redux';
//add action

const mapStateToProps = state => {
    return{
        
    }
};


const mapDispatchToProps = dispatch => {
    return{
        // onDeleteee : (indexFlatList) => {
        //     return dispatch(deleteItemFlatList(indexFlatList));
        // }
    };
};



export const MainScreenContainer =  connect(mapStateToProps, mapDispatchToProps)(MainScreen);
