import React, {Fragment} from 'react';

const UpdateItem = (props) => {


   return (props.clicked) ? (

        <div>
            <input type={"text"}/>
            <p>hello</p>
        </div>

    ) : <Fragment/>
};

export default UpdateItem;