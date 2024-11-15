// src/redux/reducers/carsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import teslaImg from './images/tesla-model-s.jpg';
import bmwImg from './images/bmw-m3.jpg';
import audiImg from './images/audi-a8.jpg';
import mercedesImg from './images/mercedes-benz-s-class.jpg';
import porscheImg from './images/porsche-911.jpg';
import fordImg from './images/ford-mustang.jpg';
import lamborghiniImg from './images/lamborghini-aventador.jpg';
import ferrariImg from './images/ferrari-488.jpg';
import toyotaImg from './images/toyota-camry.jpg';
import hondaImg from './images/honda-accord.jpg';
import chevroletImg from './images/chevrolet-corvette.jpg';
import nissanImg from './images/nissan-gtr.jpg';
import vwGolfImg from './images/volkswagen-golf.jpg';
import hyundaiImg from './images/hyundai-elantra.jpg';
import kiaImg from './images/kia-stinger.jpg';
import mazdaImg from './images/mazda-mx5.jpg';
import subaruImg from './images/subaru-wrx.jpg';
import volvoImg from './images/volvo-xc90.jpg';

const initialState = [
    {
        id: 1,
        name: 'Tesla Model S',
        description: 'Електричний седан з вражаючими характеристиками.',
        img: teslaImg
    },
    {
        id: 2,
        name: 'BMW M3',
        description: 'Спортивний автомобіль з вражаючими динамічними характеристиками.',
        img: bmwImg
    },
    {
        id:
            3,
        name: 'Audi A8',
        description: 'Розкішний седан з високим рівнем комфорту і технологій.',
        img: audiImg
    },
    {
        id: 4,
        name: 'Mercedes-Benz S-Class',
        description: 'Символ розкоші та інновацій у світі автомобілів.',
        img: mercedesImg
    },
    {
        id: 5,
        name: 'Porsche 911',
        description: 'Класичний спортивний автомобіль з видатними характеристиками.',
        img: porscheImg
    },
    {
        id: 6,
        name: 'Ford Mustang',
        description: 'Американський класичний спортивний автомобіль з потужним двигуном.',
        img: fordImg
    },
    {
        id: 7,
        name: 'Lamborghini Aventador',
        description: 'Суперкар з неймовірним дизайном і потужністю.',
        img: lamborghiniImg
    },
    {
        id: 8,
        name: 'Ferrari 488',
        description: 'Спортивний автомобіль з видатною продуктивністю та дизайном.',
        img: ferrariImg
    },
    {
        id: 9,
        name: 'Toyota Camry',
        description: 'Надійний седан з комфортом та ефективністю.',
        img: toyotaImg
    },
    {
        id: 10,
        name: 'Honda Accord',
        description: 'Комфортний седан з високим рівнем надійності.',
        img: hondaImg
    },
    {
        id: 11,
        name: 'Chevrolet Corvette',
        description: 'Суперкар, що поєднує стиль і продуктивність.',
        img: chevroletImg
    },
    {
        id: 12,
        name: 'Nissan GT-R',
        description: 'Спортивний автомобіль з неймовірною швидкістю та технологіями.',
        img: nissanImg
    },
    {
        id: 13,
        name: 'Volkswagen Golf',
        description: 'Практичний хетчбек, який поєднує стиль і функціональність.',
        img: vwGolfImg
    },
    {
        id: 14,
        name: 'Hyundai Elantra',
        description: 'Комфортний і економічний седан для щоденного використання.',
        img: hyundaiImg
    },
    {
        id: 15,
        name: 'Kia Stinger',
        description: 'Спортивний автомобіль з елегантним дизайном та високими показниками.',
        img: kiaImg
    },
    {
        id: 16,
        name: 'Mazda MX-5',
        description: 'Легкий спортивний автомобіль, що забезпечує відмінну керованість.',
        img: mazdaImg
    },
    {
        id: 17,
        name: 'Subaru WRX',
        description: 'Спортивний автомобіль з відмінною прохідністю та потужним двигуном.',
        img: subaruImg
    },
    {
        id: 18,
        name: 'Volvo XC90',
        description: 'Розкішний SUV з високими показниками безпеки та комфортом.',
        img: volvoImg
    },
];

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        addCar: (state, action) => {
            state.push(action.payload);
        },
        removeCar: (state, action) => {
            return state.filter(car => car.id !== action.payload);
        },
        updateCar: (state, action) => {
            const index = state.findIndex(car => car.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    },
});

export const { addCar, removeCar, updateCar } = carsSlice.actions;

export default carsSlice.reducer;
