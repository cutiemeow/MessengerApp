import  {
        DELETE_ITEM_FLATLIST,
        LOAD_DATA_FROM_API
    
        } from './actionTypes';


//Action
export const deleteItemFlatList = (indexFlatList) =>{
    return{
        type: DELETE_ITEM_FLATLIST,
        indexFlatList 
    }
}
export const loadDataFromAPI = () =>{
    return {
        type : LOAD_DATA_FROM_API,
    }
}