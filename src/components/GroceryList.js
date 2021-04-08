import React from 'react';
import GroceryItem from './GroceryItem'

const GroceryList = () => {
    return(
        <div className="grocery">
            <ul className="grocery-list"></ul>
            <GroceryItem />
        </div>
    )
}

export default GroceryList;