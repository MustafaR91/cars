import React from "react"
import data from './data'
import Car from "./Car"

export default function App() {
    const newCar = data.map(car => <Car item={car} />)
    return (
        <div className="hero">
        <div className="sidebar"></div>
        <main>
            <h1>Cars I've owned:</h1>
            {newCar}
        </main>
        <div className="sidebar"></div>
        </div>
    )
}