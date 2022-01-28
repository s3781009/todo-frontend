import React from 'react';

const CompletedTodoList = (props) => {
        const completed = props.completedtodos.map((item)=>(
            <CompletedTodoList item={item}    key={item.datetime}/>
));
    return (
        <div>
            {completed}
        </div>
    );
};

export default CompletedTodoList;