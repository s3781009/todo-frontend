import React from 'react';

const CompletedTodoItem = (props) => {
    return (
        <div>
           <p>{props.item.text}</p>
        </div>
    );
};

export default CompletedTodoItem;