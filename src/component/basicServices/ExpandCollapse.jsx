import React from 'react';

const divStyle = {
    margin: "10px 0px" ,
    height: "31px"
}
const divStyle1 = {
    margin: "10px 0px", 
    height: "31px",
    textAlign: "right"
}
export default function ExpandCollapse() {
    return(
        <div style={divStyle}>
            <div style={divStyle1}>
                <button className="btn btn-default" type="button">Expand All</button>
                <button className="btn btn-dafault" type="button">Collapse All</button>
            </div>
        </div>
    )
}