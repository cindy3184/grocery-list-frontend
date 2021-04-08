import React from 'react';

const Form = ({ item, setItem, list, setList }) => {
    const itemHandler = (e) => {
        console.log(e.target.value);
        setItem(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setList([
            ...list, {text: item, completed: false, id: Math.random() * 1000}
        ]);
        setItem('');
    };

    return(
        <form>
            <input onChange={itemHandler} type='text' className='grocery-input' value={item} />
            <button onClick={submitHandler} className='grocery-button' type='submit'>
                {/* //add font icon here */}
            </button>
            <div className='select'>
                <select name='groceries' className='filter'>
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option value='incomplete'>Incomplete</option>
                </select>
            </div>
        </form>
    );
};

export default Form;