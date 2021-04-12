import React from 'react';

const GroceryItem = ({ text, list, lists, setList }) => {

    const deleteHandler = () => {
        setList(lists.filter((element) => element.id !== list.id));
    };
    return(
        <section className='grocery-section'>
        <div className='grocery-container'>
            <li className='grocery-item'>{text}
            <button onClick={deleteHandler} className="delete-btn"><i className='fas fa-trash'></i></button>
            <button className="complete-btn"><i className='fas fa-check'></i></button>
            </li>
        </div>

        </section>

    );
};



export default GroceryItem;