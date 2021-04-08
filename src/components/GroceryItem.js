import React from 'react';

const GroceryItem = () => {
    return(
        <div className='grocery'>
            <li className='grocery-item'>food</li>
            <button><i className='fas fa-check'></i></button>
            <button><i className='fas fa-trash'></i></button>

        </div>

    );
};



export default GroceryItem;