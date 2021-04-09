import React from 'react';
import GroceryItem from './GroceryItem'

const GroceryList = ({ lists, setList }) => {
    return(
        <div className="grocery">
            <ul className="grocery-list">
                {lists.map((list) => (
                    <GroceryItem setList={setList} lists={lists} key={list.id} text={list.text} list={list} />
                ))}
            </ul>
        </div>
    );
};

export default GroceryList;