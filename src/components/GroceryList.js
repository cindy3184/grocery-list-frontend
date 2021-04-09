import React from 'react';
import GroceryItem from './GroceryItem'

const GroceryList = ({ list }) => {
    return(
        <div className="grocery">
            <ul className="grocery-list">
                {list.map(list => (
                    <GroceryItem text={list.text} />
                ))}
            </ul>
        </div>
    );
};

export default GroceryList;