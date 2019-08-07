import  {
        DELETE_ITEM_FLATLIST,
        LOAD_DATA_FROM_API
        } from '../actions/actionTypes';
import {loadDataFromAPI} from '../utils/'

//old state => new state
export const flatListReducer = (data = [], action) =>{
    switch(action.type){
        case DELETE_ITEM_FLATLIST: 
            return data.splice(action.indexFLatList,1);
            break;
        default : return data; //state not change
    }
}    

export const dataAPIReducer = (data = [], action) =>{
    switch (action.type) {
        case LOAD_DATA_FROM_API: return data = loadDataFromAPI();
            break;
    
        default:
            break;
    }
}