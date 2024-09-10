import React from 'react'
import { useState } from 'react';
function Way2() {
    const [country, setCountry] = useState(0)
    const countries = [
        {
            name: "India",
            value: "IN",
            cities: ["Bangluru", "Mumbai"]
        },
        {
            name: "Bangladesh",
            value: "BAN",
            cities: ["Dhaka", "Chitaggong"]
        },
        {
            name: "Pakistan",
            value: "PAK",
            cities: ["Lahore", "Karachi"]
        }];
    return (
        /*1st dropdown */
        <div>

            <select onChange={(e) => {
                console.log(e.target.value);
                setCountry(e.target.value);
            }}>{
                    countries.map((iteam, index) => {
                        return <option value={index}>{iteam.name}</option>
                    })}
            </select>

            {/*2nd dropdown */}
            <select>{
                countries[country].cities.map((iteam, index) => {
                    return <option value={index}>{iteam}</option>
                })
            }
            </select>
        </div>
    )
}

export default Way2
