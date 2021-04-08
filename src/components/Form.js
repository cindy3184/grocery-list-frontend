import React from 'react';

const Form = () => {
    return(
        <form>
            <input type="text" className="grocery-input" />
            <button className="grocery-button" type="submit">
                {/* //add font icon here */}
            </button>
            <div className="select">
                <select name="groceries" className="filter">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </div>
        </form>
    );
};

export default Form;