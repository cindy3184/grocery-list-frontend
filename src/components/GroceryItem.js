import React from 'react';

const GroceryItem = ({ text }) => {
    return(
        <div className='grocery'>
            <li className='grocery-item'>{text}</li>
            <button className="complete-btn"><i className='fas fa-check'></i></button>
            <button className="delete-btn"><i className='fas fa-trash'></i></button>

        </div>

    );
};



export default GroceryItem;