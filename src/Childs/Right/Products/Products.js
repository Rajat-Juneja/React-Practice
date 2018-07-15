import React from 'react';
import {Count} from '../Count/Count';
 
export const Products =(props)=>{
    var ShowItem = props.data.length>0?<h3>Items </h3>:<h3>No Items </h3>;
    return(
        <div className="row">
        <div className="col-sm-12 col-12">
        <Count/>
        </div>
        {ShowItem}
        {props.data.map(Obj=>{
            return(
                <div className="col-sm-12 col-12 " key={Obj.name}>
                <li>{Obj.id} {Obj.name} {Obj.price} </li>
                        <button onClick={props.sendData(Obj.id)}>Add to Cart</button>
                </div>
            )
        })}
        </div>
    )
}
// className={props.data.id>1001?'red':'green'}