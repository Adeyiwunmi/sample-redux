export function itemErrorHasOccurred(state = false, action) {
    switch (action.type) {
        case  'ITEM_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}


export function itemIsLoading(state = false,action){
    switch (action.type){
        case 'ITEMS_IS_LOADING':
            return action.isLoading;
        default:
            return  state;
    }
}


export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;
        default:
            return state;
    }
}



export function removedItems(state= [], action) {
    switch (action.type) {
        case 'REMOVED_ITEM':
            console.log('got to remove items reducer => length => items_index', action.items.length, action.index)
            action.items.splice(action.index,1);
            return action.items;
        default:
            return state;
    }
}
