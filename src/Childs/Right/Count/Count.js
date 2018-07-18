import React from 'react';

export const Count = (props) =>{
    return(
        <div>
            <h4>Count: {props.number || 0}</h4>
        </div>
    )
};