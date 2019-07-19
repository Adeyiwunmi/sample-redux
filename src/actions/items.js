export function itemHasErrored(bool) {
    return {
        type: 'ITEM_HAS_ERRORED',
        hasErrored: bool
    }
}


export function itemIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    }
}


export function removedItem(index,items) {
    return {
        type: 'REMOVED_ITEM',
        index,
        items
    }
}

export  function removedItem2(index, items) {
    return function (dispatch) {
        items.splice(index,1);
        console.log("index " + index + " items length " + items.length)
        dispatch(itemsData(items));
    }
}


export function itemsData(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items: items
    };
}


export function itemsFetchDataUrl(url) {
    return (dispatch) => {
        dispatch(itemIsLoading(true));
        fetch(url).then((response) => {
            if (!response.ok) {
                dispatch(itemHasErrored(true));
            }
            return response;
        }).then((response) => response.json())
            .then((items) => {
                dispatch(itemsData(items))
            })
            .catch(() => dispatch(itemHasErrored(true)))
    }
}
