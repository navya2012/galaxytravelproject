import React from 'react'

const SingleCard = ({heading,line1,line2,line3}) => {
    return (
        <>
            <div className="cardData border text-center p-5 d-flex flex-column gap-3  rounded">
                <h2>{heading}</h2>
                <div className="content">
                    <p>{line1}</p>
                    <p>{line2}</p>
                    <p>{line3}</p>
                </div>
            </div>
        </>
    )
}

export default SingleCard;