import React from 'react';

export default function Alart(props) {
    return (
        <div style={{height:'50px'}}>
            {props.alert && <div>
                <div style={{backgroundColor: 'grey'}} className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{props.alert.type} : </strong>{props.alert.msg}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>}
        </div>
    );
}
