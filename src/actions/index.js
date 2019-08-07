import {DELETE_ITEM_FLATLIST} from './actionTypes';


//Action
export const deleteItemFlatList = (indexFlatList) =>{
    return{
        type: DELETE_ITEM_FLATLIST,
        indexFlatList 
    }
}