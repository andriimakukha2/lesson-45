import React from 'react';
import CarCard from './CarCard';
import { useSelector } from 'react-redux';

const Cars = () => {
    const cars = useSelector((state) => state.cars);

    return (
        <div className="cars">
            <h2>Список автомобілів</h2>
            <div className="car-list">
                {cars.map((car) => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>
        </div>
    );
};

export default Cars;
