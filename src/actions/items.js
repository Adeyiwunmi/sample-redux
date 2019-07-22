import _ from 'lodash';

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

export  function removedItem(removedItem, items) {
    return function (dispatch) {
        const newItems = _.remove(items, function (item) {
            return item !== removedItem;
        });
        dispatch(itemsData(newItems));
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
