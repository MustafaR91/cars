import React from 'react'

export default function Car(props) {
    return (
        <div className="each-car">
            <h2>{props.item.model}</h2>
            <h3>Country of origin: {props.item.origin}</h3>
            <img src={props.item.imageUrl} />
            <h4>Date of purchase: {props.item.purchaseDate}</h4>
            <h4>Date of sale: {props.item.sellDate}</h4>
            <h6>Description: {props.item.description}</h6>
        </div>
    )
}