import ChatScreen from '../../components/screens/ChatScreen';
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



export const ChatScreenContainer =  connect(mapStateToProps, mapDispatchToProps)(ChatScreen);
