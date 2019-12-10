import React from 'react';

const NumbersTable = ({limit})=>{
    const squares =  [...new Array(limit)];
    return(
    <div className="NumbersTable">
        {
        squares.map((_,i)=>{
            return(
                <div className="NumbersTable-square" style={{backgroundColor:i%2?"red":"white"}}>
                    <p>{i+1}</p>
                </div>
            )
        })   
        }
        
    </div>
    )
};

export default NumbersTable;