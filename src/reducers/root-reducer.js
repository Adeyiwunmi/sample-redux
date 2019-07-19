import {combineReducers} from "redux";
import {items,itemIsLoading, itemErrorHasOccurred, removedItems} from './items'

export default combineReducers({
    itemErrorHasOccurred,items,itemIsLoading, removedItems
});
