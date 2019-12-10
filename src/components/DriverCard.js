import React from 'react';
import Rating from './Rating';

const DriverCard = ({name,rating,img,car})=>{

    const image = {backgroundImage:`url(${img})`}
    return(
        <div className="DriveCard-container">
            <div className="DriveCard-content">
                <div className="DriveCard-img" style={image}/>
                <div className="DriveCard-info">
                    <p className="DriveCard-name">{name}</p>
                    <Rating
                        rate={Math.round(rating)}
                        color="white"
                    />
                    <p className="DriveCard-carDescription">{`${car.model} - ${car.licensePlate}`}</p>
                </div>
            </div>
        </div>
    )
};

export default DriverCard
