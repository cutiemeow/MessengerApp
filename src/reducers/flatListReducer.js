import {DELETE_ITEM_FLATLIST} from '../actions/actionTypes';

//old state => new state
export const flatListReducer = (data = [], action) =>{
    switch(action.type){
        case DELETE_ITEM_FLATLIST: 
            return data.splice(action.indexFLatList,1);
        default : return data; //state not change
    }
}       