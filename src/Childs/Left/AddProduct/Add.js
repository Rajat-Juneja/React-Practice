import React from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Total} from '../TotalProduct/Total';

export const AddSection = (props)=>{
    return(
        <div className="row">
            <div className="col-sm-6 col-6">
                <button onClick={props.addObj}>Add</button>
            </div>

            <div className="col-sm-6 col-6">            
                <button onClick={props.load}>Load</button>
            </div>
            
            <div className="col-12 col-sm-12">
            <label>Id:&nbsp;&nbsp; 
                <input type="text" onBlur={props.id} placeholder="Enter id"/>
            </label>
            <br/>
            <label>Name:&nbsp;&nbsp; 
                <input type="text" onBlur={props.name} placeholder="Enter name"/>
            </label>
            <br/>
            <label>Price:&nbsp;&nbsp; 
                <input type="text" onBlur={props.price} placeholder="Enter price"/>
            </label>
            <br/>
            <label>ImageURL:&nbsp;&nbsp;
                <input type="text" onBlur={props.url} placeholder="Enter image URL"/>
            </label>
            <br/><br/><br/><br/>
            <Total length={props.data.length}/>
            </div>
        </div>
    )
}