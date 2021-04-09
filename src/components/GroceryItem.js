import React from 'react';

const GroceryItem = ({ text, list, lists, setList }) => {

    const deleteHandler = () => {
        setList(lists.filter((element) => element.id !== list.id));
    };
    return(
        <div className='grocery'>
            <li className='grocery-item'>{text}</li>
            <button className="complete-btn"><i className='fas fa-check'></i></button>
            <button onClick={deleteHandler} className="delete-btn"><i className='fas fa-trash'></i></button>

        </div>

    );
};



export default GroceryItem;