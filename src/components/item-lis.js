import React, {Component} from 'react';
import {connect} from 'react-redux';
import {itemsFetchDataUrl, removedItem, removedItem2} from "../actions/items";


class ItemList extends Component {
    componentDidMount() {
        this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items')
    }

    render() {
        if (this.props.items) {
            return (
                <ul>
                    <button onClick={this.sayHello}>SayHello</button>
                    {this.props.items.map((item,index) => (
                        <li key={item.id}> {item.label ? item.label : "no label"}
                        <button onClick={this.removeItem.bind(this, index,this.props.items)}>remove</button></li>
                    ))}
                </ul>)
        }
        if (this.props.hasErrored) {
            return <p>There was an error </p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
    }

    removeItem = function (index, items) {
        this.props.removeItem(index, items)
    };

    sayHello= function(){
        console.log("hello from on click");
    };


}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchDataUrl(url)),
        removeItem: (index,items) => dispatch(removedItem(index,items))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
