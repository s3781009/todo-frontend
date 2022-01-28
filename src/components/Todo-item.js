import React from 'react';

const TodoItem = (props) => {


    return (
        <div>
           <p>{props.todo.text}</p>
            <p>{props.todo.datetime}</p>
            <button onClick={()=>props.handleDelete(props.todo.datetime)}>delete</button>
        </div>
    );
};

export default TodoItem;