import React from 'react';

const TodoForm = (props) => {


    return (
        <div>
           <form>
                <input
                    type='text'
                    value={props.input}
                    placeholder='Add to do item'
                    name='text'
                    onChange={event=>props.handleChange(event)}
                />
               <button onClick={(event => props.handleSubmit(event))}>Submit</button>
           </form>
        </div>
    );
};

export default TodoForm;