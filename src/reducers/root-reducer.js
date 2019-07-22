import {combineReducers} from "redux";
import {items,itemIsLoading, itemErrorHasOccurred} from './items'

export default combineReducers({
    itemErrorHasOccurred,items,itemIsLoading
});
