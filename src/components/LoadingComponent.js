import React from 'react';

export const Loading = () => {
    return(
    <div className="col-12 text-center align-self-center p-5">
        <span className="fa fa-eercast fa-pulse fa-3x fa-fw text-warning"></span>
        <p className="pt-3 font-italic font-weight-bold">Loading . . .</p>
    </div>
    );
}